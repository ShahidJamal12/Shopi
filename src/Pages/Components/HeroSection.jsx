/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
const HeroSection = (props) => {
  return (
    <>
        <section className="relative top-20 w-screen h-screen z-0 bg-slate-100 p-1 bg-background-girl bg-contain bg-no-repeat bg-right flex justify-center items-start flex-col px-24 max-sm:px-10 max-sm:bg-[13px] 2xl:px-36">
            <div className="flex flex-col justify-center items-start gap-6 relative z-20 2xl:gap-10">
            <h1 className="text-7xl text-slate-900 font-bold max-sm:text-5xl 2xl:text-8xl">{props.title}</h1>
            <div className="text-slate-800 text-xl w-3/4 max-sm:text-lg max-[450px]:text-sm max-[450px]:w-4/5 2xl:text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae temporibus eos voluptatum iste repellendus laborum commodi odio? Nesciunt aspernatur quam error eligendi pariatur.</div>
            <button>
              <NavLink to="/shop" className="flex justify-center items-center gap-2 text-2xl font-semibold transition-all hover:gap-3 hover:text-violet-600 2xl:text-4xl">Shop Now <IoIosArrowForward/></NavLink>
            </button>
            </div>
        </section>
    </>
  )
}

export default HeroSection