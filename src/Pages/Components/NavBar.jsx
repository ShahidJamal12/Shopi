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
        <div className="logo text-4xl max-mini:text-3xl font-mono font-bold 2xl:text-5xl">
            <NavLink to="/">Shopi</NavLink>
        </div>
        <ul className="flex justify-center items-center gap-4 uppercase max-mini:flex-col max-mini:fixed max-mini:w-screen max-mini:h-0 max-mini:py-0 max-mini:left-0 max-mini:bg-violet-600 max-mini:top-20 max-mini:text-xl max-mini:gap-12 max-mini:overflow-hidden transition-all duration-500 2xl:text-2xl" ref={slideRef}>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/" className={({isActive})=>isActive ? "text-violet-600 bg-black py-2 px-4 font-bold" : ""}>Home</NavLink>
          </li>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/about" className={({isActive})=>isActive ? "text-violet-600 bg-black py-2 px-4 font-bold" : ""}>About</NavLink>
          </li>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/contact" className={({isActive})=>isActive ? "text-violet-600 bg-black py-2 px-4 font-bold" : ""}>Contact</NavLink>
          </li>
          <li className="hover:text-violet-600 transition-all">
            <NavLink to="/shop" className={({isActive})=>isActive ? "text-violet-600 bg-black py-2 px-4 font-bold" : ""}>Shop</NavLink>
          </li>
          {
            !isAuthenticated? 
            (<li>
              <button className="px-5 py-[6px] bg-white text-black uppercase hover:text-white hover:bg-violet-700 transition-all hover:rounded-md hover:scale-110" onClick={() => loginWithRedirect()}>
                  Log In
              </button>
            </li>):(
              <div className="flex justify-center items-center gap-5 max-mini:flex-col max-mini:gap-10 ">
                <div className="text-slate-500 text-sm lowercase max-mini:text-slate-900 max-mini:text-xl">Welcome, {user.name}</div>
              <li>
              <button className="px-5 py-[6px] bg-white text-black uppercase hover:text-white hover:bg-violet-700 transition-all hover:rounded-md hover:scale-110" onClick={() => logout()}>
                  Log Out
              </button>
            </li>
              </div>
            )
          }
          <li className="relative">
            <NavLink to="/cart" className={({isActive})=>isActive ? "text-violet-200" : ""}>
              <i className="fa-solid fa-cart-shopping text-3xl 2xl:text-5xl"></i>
              <div className="absolute bottom-1/2 left-1/2 bg-violet-800 text-white px-1.5 rounded-full 2xl:bottom-1/2 2xl:left-9 2xl:text-3xl ">{cartValue.cartItems.length}</div>
            </NavLink>
          </li>
        </ul>
          <div className="hidden max-mini:flex" onClick={()=>{
            slideRef.current.classList.toggle("max-mini:py-5")
            slideRef.current.classList.toggle("max-mini:h-screen")
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
