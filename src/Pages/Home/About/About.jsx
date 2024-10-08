import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero my-8 md:my-32">
      <div className="hero-content flex-col md:gap-x-14 lg:flex-row">
        <div className="md:relative">
          <img
            src={person}
            className="w-full md:max-w-xl  lg:w-[460px] rounded-lg  shadow-2xl"
          />
          <img
            src={parts}
            className="md:w-[327px] rounded-md  md:border-8 w-full md:border-white  md:absolute md:-right-12 -bottom-20"
            alt=""
          />
        </div>

        <div className="w-full  md:w-1/2 md:pl-12">
          <p className="font-bold font-inter text-xl text-orange-0">About Us</p>
          <h1 className="md:text-5xl text-2xl text-[#151515] lg:leading-[54px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-[#737373] font-normal text-base font-inter">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373] md:mb-8 font-normal text-base font-inter">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn  hover:text-[#000] bg-[#FF3811] text-[#fff]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
