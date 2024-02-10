import Image from "next/image";
import { Button } from ".";
const Hero = () => {
  return (
    <div className="flex-col flex-1 w-full gap-6 flexCenter">
      <div className="relative rounded-full  h-[150px] w-[150px] border-secondary">
        <Image
          alt="profile"
          src={`/profile.jpg`}
          fill
          sizes="100%"
          className="object-contain rounded-full "
        />
      </div>
      <p> {`Hi, I'm Ketsadaphone 👋`}</p>
      <h1 className="max-w-[15rem] text-3xl text-center lg:max-w-xl lg:text-6xl textGradient">
        Building digital products, brands, and experience.
      </h1>
      <Button>{"Latest Blog >"}</Button>
    </div>
  );
};

export default Hero;
