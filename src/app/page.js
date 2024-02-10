import { Header, Hero, Company, Service, Quote } from "@/components";
export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full min-h-screen ">
        <Header />
        <Hero />
      </main>
      <Company />
      <Service />
      <Quote />
    </>
  );
}
