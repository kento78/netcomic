import { IconTime } from "components/icons";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { IComic } from "types";

interface HomeBannerProps {
  banners: IComic[];
}

const HomeBanner = ({ banners }: HomeBannerProps) => {
  return (
    <section>
      <div className="layout-container">
        <h2 className="text-xl text-blue29 mb-[10px]">Truyện đề cử</h2>
        <Swiper
          loop
          slidesPerView="auto"
          slidesPerGroupAuto
          spaceBetween={14}
          navigation={true}
          modules={[Navigation]}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="!w-[187px]">
              <div className="relative overflow-hidden rounded">
                <picture>
                  <source srcSet={banner.posterUrl} type="image/webp" />
                  <img
                    alt={banner.slug}
                    src={banner.posterUrl}
                    className="object-cover aspect-[190/250]"
                  />
                </picture>
                <div className="absolute bottom-0 left-0 right-0 p-[5px] text-white bg-overlay">
                  <h3 className="line-clamp-1 text-[15px] text-center">{banner.title}</h3>
                  <div className="flex items-center justify-center gap-[10px] mt-1">
                    <span className="text-xs">{banner.newestChapter}</span>
                    <span className="flex items-center gap-[2px] text-[11px] italic">
                      <IconTime className="text-white" /> {banner.updatedAgo}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;