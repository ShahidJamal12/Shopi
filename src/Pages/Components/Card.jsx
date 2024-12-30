import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <NavLink to={`/singleproduct/${props.SP_id}`} target="_blank">
      <div className="card bg-white text-black shadow-xl w-64 h-[448px] shadow-slate-400 rounded-sm flex justify-center items-start flex-col gap-3 pb-4 transition-all hover:scale-105 hover:rounded-lg hover:shadow-slate-500 ">
      <div
        className="img w-64 h-64 bg-white bg-no-repeat bg-cover transition-all hover:opacity-90"
        style={{
          backgroundImage: `url(${props.imgSrc})`,
        }}
      ></div>
      <div className="flex justify-center items-start flex-col mx-4 gap-2">
        <div className="category text-sm px-4 py-1 bg-violet-600   text-white rounded-full">{props.category}</div>
        <div className="title text-xl font-semibold">{props.cardTitle}</div>
        <div className="price text-xl font-semibold text-violet-950">
          ₹{props.price}
          {/* <sup>
            <del className="text-red-800">₹1,59,999</del>
            <sub className="text-green-900">23%off</sub>
          </sup> */}
        </div>
        <button onClick={()=>{
          console.log(props.indexNum)
        }} className="flex justify-center items-center gap-1 mt-2 px-4 py-2 bg-violet-600 text-white rounded-sm transition-all hover:bg-violet-800 hover:gap-3 hover:rounded-lg relative">
          <div>Add to Cart</div>
          <i className="fa-solid fa-cart-shopping text-lg"></i>
        </button>
      </div>
    </div>
    </NavLink>
  );
};

export default Card;
