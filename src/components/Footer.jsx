import SocialLink from "./SocialLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`p-[10px] w-full`}>
      <nav className=" h-24 max-w-7xl mx-auto border-t-2 border-t-[#242424] flexBetween">
        <div className="flex flex-col">
          {`© 2023 All rights reserved.`}
          <Link href={`https://kawsar.design/`}>
            inspired by{" "}
            <span className="font-semibold textGradient">Kawsar Ahmed</span>
          </Link>
        </div>
        <SocialLink />
      </nav>
    </footer>
  );
};

export default Footer;
