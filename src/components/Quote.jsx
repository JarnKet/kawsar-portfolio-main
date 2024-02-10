import { Button } from ".";
import Link from "next/link";
const Quote = () => {
  return (
    <section className="min-h-[70vh] w-full border-t border-t-primary flex-col flexCenter gap-y-10">
      <h3 className="max-w-lg text-6xl text-center textGradient font-lg">
        Tell me about your next project
      </h3>
      <Button>
        <Link target="_blank" href={`mailto:example@mail.com`}>
          {`Get in touch >`}
        </Link>
      </Button>
    </section>
  );
};

export default Quote;
