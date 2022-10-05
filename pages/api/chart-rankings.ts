import axios from "axios";
import * as cheerio from "cheerio";
import { PATH } from "constants/path";
import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import { IComicTopRanking } from "types";
import { IQueryParams } from "types/common";
import catchAsync from "utils/catch-async";
import { getTopMonthComic } from "utils/crawl";
import { ApiError, responseError, responseSuccess } from "utils/response";

const ChartRankingsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const data = await crawlChartRankings(query);
  const response = {
    message: "Lấy dữ liệu bảng xếp hạng!",
    data,
  };
  responseSuccess(res, response);
};

async function crawlChartRankings(query: Partial<IQueryParams>) {
  const response = await axios.get(PATH.netTruyen as string, { params: query });
  const html = response.data;
  const $ = cheerio.load(html);
  let chartRankings: IComicTopRanking[] = [];
  $("#ctl00_divRight #topMonth li", html).each(function (index, element) {
    const comic = getTopMonthComic($(element));
    chartRankings.push(comic);
  });
  return chartRankings;
}

export default catchAsync(ChartRankingsApi);
