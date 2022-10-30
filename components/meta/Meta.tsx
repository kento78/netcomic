import { server } from "configs/server";
import Head from "next/head";
import { useRouter } from "next/router";

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}

const Meta = ({
  title = "Đọc truyện tranh online - Truyện gì cũng có - NetComic",
  description = "Bất cứ truyện bạn thích đều có và miễn phí tại NetComic, Web đọc truyện tranh online, không quảng cáo và cập nhật nhanh nhất",
  image = "https://raw.githubusercontent.com/lamhoang1256/shopbee/main/screenshots/thumbnail-youtube.png",
}: MetaProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" key="favicon" />
      <link rel="canonical" href={server} key="canonical" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <meta name="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />
      <meta name="robots" content="index,follow" key="robots" />
      <meta name="googlebot" content="index,follow" key="googlebot" />
      <meta property="og:type" content="website" key="ogType" />
      <meta property="og:title" content={title} key="ogTitle" />
      <meta property="og:description" content={description} key="ogDescription" />
      <meta property="og:image" content={image} key="ogImage" />
      <meta
        property="og:image:alt"
        content="Netcomic đọc truyện tranh online, không quảng cáo và cập nhật nhanh nhất"
        key="ogImageAlt"
      />
      <meta property="og:url" content={`${server}${router.asPath}`} key="ogUrl" />
      <meta property="twitter:card" content="summary_large_image" key="twitterCard" />
      <meta property="twitter:title" content={title} key="twitterTitle" />
      <meta property="twitter:description" content={description} key="twitterDescription" />
      <meta property="twitter:image" content={image} key="twitterImage" />
      <meta property="og:locale" content="vi_VN" key="ogLocale" />
    </Head>
  );
};

export default Meta;
