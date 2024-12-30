import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { count } from "../../App";
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  let cartValue = useContext(count)
    const slideRef = useRef(null)
    const changeRef = useRef(null)
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <header >
      <nav className="h-20 w-screen bg-[#0f0f0f] flex justify-between items-center px-9 pr-12 text-white fixed 2xl:h-28 z-50">
        <div className="logo text-4xl max-sm:text-3xl font-mono font-bold 2xl:text-5xl">
            <NavLink to="/">Shopi</NavLink>
        </div>
        <ul className="flex justify-center items-center gap-4 uppercase max-sm:flex-col max-sm:fixed max-sm:w-screen max-sm:h-0 max-sm:py-0 max-sm:left-0 max-sm:bg-violet-600 max-sm:top-20 max-sm:text-xl max-sm:gap-16 max-sm:overflow-hidden transition-all duration-500 2xl:text-2xl" ref={slideRef}>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          {
            !isAuthenticated? 
            (<li>
              <button className="px-5 py-[6px] bg-white text-black uppercase hover:text-white hover:bg-violet-700 transition-all hover:rounded-md hover:scale-110" onClick={() => loginWithRedirect()}>
                  Log In
              </button>
            </li>):(
              <div className="flex justify-center items-center gap-5 max-sm:flex-col max-sm:gap-10 ">
                <div className="text-slate-500 text-sm lowercase max-sm:text-slate-900 max-sm:text-xl">Welcome, {user.name}</div>
              <li>
              <button className="px-5 py-[6px] bg-white text-black uppercase hover:text-white hover:bg-violet-700 transition-all hover:rounded-md hover:scale-110" onClick={() => logout()}>
                  Log Out
              </button>
            </li>
              </div>
            )
          }
          <li className="relative">
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping text-3xl 2xl:text-5xl"></i>
              <div className="absolute bottom-1/2 left-1/2 bg-violet-800 text-white px-1.5 rounded-full 2xl:bottom-1/2 2xl:left-9 2xl:text-3xl ">{cartValue.cartItems.length}</div>
            </NavLink>
          </li>
        </ul>
          <div className="hidden max-sm:flex" onClick={()=>{
            slideRef.current.classList.toggle("max-sm:py-5")
            slideRef.current.classList.toggle("max-sm:h-screen")
            changeRef.current.classList.toggle("fa-x")
            changeRef.current.classList.toggle("text-2xl")
            changeRef.current.classList.toggle("fa-bars")
            console.log("Hello world")
          }}>
            <i className="fa-solid fa-bars text-3xl" ref={changeRef}></i>
          </div>
      </nav>
    </header>
  );
};

export default NavBar;