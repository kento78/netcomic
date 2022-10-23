import { IComic, IPagination } from "@types";
import axios from "axios";
import { Pagination } from "components/pagination";
import { server } from "configs/server";
import LayoutHome from "layouts/LayoutHome";
import { ComicChartRanking } from "modules/comic";
import { HomeBanner, HomeCategory, HomeFollow, HomeHistory, HomeNewestComic } from "modules/home";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface HomePageProps {
  banners: IComic[];
  newestComics: IComic[];
  paginations: IPagination[];
}

const HomePage = ({ banners, newestComics, paginations }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Trang chủ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutHome>
        <div className="bg-white rounded-lg layout-container">
          <HomeBanner banners={banners} />
          <HomeCategory />
          <HomeNewestComic newestComics={newestComics} />
          <Pagination paginations={paginations} />
        </div>
      </LayoutHome>
    </>
  );
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { data } = (await axios.get(`${server}/api/home`, { params: query })).data;
  return {
    props: {
      banners: data.banners,
      newestComics: data.newestComics,
      paginations: data.paginations,
    },
  };
};

export default HomePage;
