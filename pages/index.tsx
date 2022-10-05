import axios from "axios";
import { Pagination } from "components/pagination";
import { server } from "configs/server";
import LayoutHome from "layouts/LayoutHome";
import { ComicChartRanking } from "modules/comic";
import { HomeBanner, HomeNewestComic, HomeFollow, HomeHistory } from "modules/home";
import Head from "next/head";
import { IComic, IComicTopRanking, IPagination } from "types";

interface HomePageProps {
  banners: IComic[];
  newestComics: IComic[];
  pagination: IPagination[];
}

const Home = ({ banners, newestComics, pagination }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Trang chủ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutHome>
        <div className="max-w-[1030px] py-[15px] bg-white mx-auto">
          <HomeBanner banners={banners} />
          <div className="flex flex-col lg:flex-row gap-4 mt-6 px-[15px]">
            <div className="lg:w-2/3">
              <HomeNewestComic newestComics={newestComics} />
              <Pagination pagination={pagination} />
            </div>
            <div className="flex flex-col lg:w-1/3 gap-y-4">
              <HomeFollow />
              <HomeHistory />
              <ComicChartRanking />
            </div>
          </div>
        </div>
      </LayoutHome>
    </>
  );
};

export async function getStaticProps() {
  const { data } = (await axios.get(`${server}/api/home`)).data;
  return {
    props: {
      banners: data.banners,
      newestComics: data.newestComics,
      pagination: data.pagination,
    },
  };
}

export default Home;