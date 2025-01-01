import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import CartItems from "./Components/CartItems";
import ReactLoading from "react-loading";
const Cart = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <NavBar />
      {isAuthenticated ? (
        <>
          <Profile />
          <CartItems />
        </>
      ) : (
        <>
          <div className="w-screen h-screen relative top-20 text-3xl flex justify-center items-center ">
            <ReactLoading type="balls" color="black" className=" w-20 h-20" />
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
