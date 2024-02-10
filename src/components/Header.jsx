import SocialLink from "./SocialLink";
import EmailBtn from "./EmailBtn";
import Link from "next/link";

const headerStyle = "p-[10px] w-full ";

const Header = () => {
  return (
    <header className={headerStyle}>
      <nav className=" h-24 max-w-7xl mx-auto border-b-2 border-b-[#242424] flexBetween">
        <Link
          target="_blank"
          href={`mailto:example@mail.com`}
          className="cursor-pointer flexNormal hover:text-accent"
        >
          <EmailBtn />
          <p>Get in touch</p>
        </Link>
        <SocialLink />
      </nav>
    </header>
  );
};

export default Header;
