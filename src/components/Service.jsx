import {
  FaPencilRuler,
  FaFirefoxBrowser,
  FaMobile,
  FaFileCode,
} from "react-icons/fa";
const Service = () => {
  return (
    <section className="container flex-col w-full min-h-screen gap-10 mx-auto px-[1rem] lg:px-10 flexCenter">
      <h3 className="max-w-xl text-2xl text-center lg:text-4xl font-md textGradient">
        Collaborate with brands and agencies to create impactful results.
      </h3>
      <div className="grid grid-cols-2 gap-2 lg:gap-10 justify-items-center lg:grid-cols-4">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-start justify-start lg:justify-end  px-5 py-6 border bg-componentBg border-primary gap-y-5 h-[250px] lg:h-[350px]"
          >
            <div>{service.icon}</div>
            <h4 className="text-lg font-semibold textGradient">
              {service.title}
            </h4>
            <small className="lg:text-base">{service.description}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

const serviceData = [
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    icon: <FaMobile className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
    icon: <FaFirefoxBrowser className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Desgin & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
    icon: <FaPencilRuler className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    icon: <FaFileCode className="w-6 h-6" />,
  },
];
