import { IconChat, IconEye, IconHeart } from "components/icons";
import { PATH } from "constants/path";
import Link from "next/link";
import { IComic } from "types";

interface ComicItemProps {
  comic: IComic | any;
}

const ComicItem = ({ comic }: ComicItemProps) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded aspect-[2.2/3]">
        <picture>
          <source srcSet={comic.posterUrl} type="image/webp" />
          <img alt={comic.slug} src={comic.posterUrl} className="object-cover w-full h-full " />
        </picture>
        <div className="absolute bottom-0 left-0 text-xs right-0 py-[5px] text-white bg-overlay flex items-center justify-between gap-x-[2px]">
          <div className="flex items-center gap-x-[2px]">
            <IconEye />
            <span>3.889K</span>
          </div>
          <div className="flex items-center gap-x-[2px]">
            <IconChat />
            <span>3.889</span>
          </div>
          <div className="flex items-center gap-x-[2px]">
            <IconHeart />
            <span>3.889</span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Link href={`${PATH.comic}/${comic.slug}`}>
          <a>
            <h3 className="mt-1 text-base transition-all duration-200 line-clamp-2 hover:text-blue29">
              {comic.title}
            </h3>
          </a>
        </Link>
        <div>
          {comic.chapters?.map((chapter: any) => (
            <div className="flex items-center justify-between mt-1" key={chapter.name}>
              <span className="text-[13px]">{chapter.name}</span>
              <span className="text-[11px] text-[#c0c0c0] italic">{chapter.updatedAgo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicItem;