import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const SocialLink = () => {
  return (
    <ul className="flexNormal">
      {links.map((link) => (
        <li key={link.id} className="hover:text-accent">
          <Link href={link.path} target="_blank">
            <div className="hidden lg:block">
              <span className={links.length === link.id ? "" : "mr-4"}>
                {link.name}
              </span>{" "}
              {links.length === link.id ? "" : " / "}
            </div>
            <div className="block lg:hidden">{link.icon}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLink;

const links = [
  {
    id: 1,
    name: "Facebook",
    path: "/",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "Youtube",
    path: "/",
    icon: <FaYoutube className="w-5 h-5" />,
  },
  { id: 3, name: "Tiktok", path: "/", icon: <FaTiktok className="w-5 h-5" /> },
];
