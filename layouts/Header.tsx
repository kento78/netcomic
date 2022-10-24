import { IconSearch } from "components/icons";
import { Image } from "components/image";
import { CustomLink } from "components/link";
import { Popover } from "components/popover";
import { defaultAvatar } from "constants/image";
import { PATH } from "constants/path";
import { signOut } from "firebase/auth";
import usePopover from "hooks/usePopover";
import { auth } from "libs/firebase/firebase-config";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import useGlobalStore from "store/global-store";
import { createUsernameFromEmail } from "utils";

const Header = () => {
  const { currentUser } = useGlobalStore();
  const { activePopover, hidePopover, showPopover } = usePopover();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleSearchWithKeyword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${PATH.search}?keyword=${keyword}`);
  };
  return (
    <header style={{ backgroundImage: `url("/bg-header.jpg")` }}>
      <div className="layout-container">
        <nav className="flex items-center h-[52px] relative justify-between">
          <CustomLink href={PATH.home}>
            <Image src="/logo-nettruyen.png" alt="logo" className="w-[150px]" />
          </CustomLink>
          <form
            onSubmit={handleSearchWithKeyword}
            className="md:flex hidden items-center justify-between flex-1 max-w-[400px] pl-3 h-8 bg-white rounded-sm"
          >
            <input
              type="text"
              className="flex-1 h-8 text-sm outline-none"
              placeholder="Tìm truyện"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="px-3">
              <IconSearch />
            </button>
          </form>
          {currentUser?.email ? (
            <div
              className="relative h-full text-white w-max"
              onMouseEnter={showPopover}
              onMouseLeave={hidePopover}
            >
              <div className="flex items-center justify-end h-full gap-x-2 transition-all duration-100 hover:text-[#ffffffb3] cursor-pointer">
                <Image
                  alt="avatar"
                  src={currentUser?.photoURL || defaultAvatar}
                  className="object-cover w-5 h-5 rounded-full"
                />
                <span className="font-medium max5se:line-clamp-1 ">
                  {createUsernameFromEmail(currentUser?.email as string)}
                </span>
              </div>
              <Popover active={activePopover} className="w-max">
                <CustomLink href={PATH.profile} className="popover-link">
                  Tài khoản của tôi
                </CustomLink>
                <CustomLink href={PATH.follow} className="popover-link">
                  Truyện theo dõi
                </CustomLink>
                <button
                  type="button"
                  className={"popover-link w-full text-left"}
                  onClick={() => signOut(auth)}
                >
                  Đăng xuất
                </button>
              </Popover>
            </div>
          ) : (
            <div className="flex gap-x-4">
              <CustomLink
                href={PATH.signUp}
                className="text-[#ffffffb3] transition-all duration-100 hover:opacity-70"
              >
                Đăng kí
              </CustomLink>
              <CustomLink
                href={PATH.signIn}
                className="text-[#ffffffb3] transition-all duration-100 hover:opacity-70"
              >
                Đăng nhập
              </CustomLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
