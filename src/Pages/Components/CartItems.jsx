import CartTable from "./CartTable";
import { count } from "../../App";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import FinalCart from "./FinalCart";
import { NavLink } from "react-router-dom";
const CartItems = () => {
  let cartValue = useContext(count);
  let cartItem = cartValue.cartItems;
  let { isAuthenticated } = useAuth0();
  let priceArr = [];
  // let priceValue = 0;
  for (const element of cartItem) {
    console.log(Math.round(element.price * 85.59 * element.quantity));
    priceArr.push(Math.round(element.price * 85.59 * element.quantity));
  }
  // for (let i = 0; i < priceArr.length; i++) {
  //   priceValue += priceArr[i];
  // }
  // let priceVal = `${new Intl.NumberFormat("en-IN", {
  //   maximumSignificantDigits: 3,
  // }).format(priceValue)}`;
  // let randomDis = Math.floor(Math.random() * (10000 - 100 + 1)) + 100
  // console.log(cartItem);
  let list = cartItem.map((value, index) => {
    let Price = `${Math.round(value.price * 85.59)}`;
    let finalPrice = `₹${new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(Price)}`;
    let totalPrice = `${Math.round(value.price * value.quantity * 85.59)}`;
    let finaltotalPrice = `₹${new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(totalPrice)}`;
    return (
      <CartTable
        productImage={value.images[0]}
        productName={value.title}
        productPrice={finalPrice}
        productQuantity={value.quantity}
        key={index}
        productTotalPrice={finaltotalPrice}
        indexNumber={index}
      />
    );
  });
  return (
    <>
      <div className="relative top-40 px-20 pb-20 max-sm:px-2">
        <div className="w-full">
          <table className="w-full text-center text-sm max-cartMini:text-[7px] lg:text-xl">
            <thead>
              <tr className="text-slate-700 ">
                <th className="w-20">Item</th>
                <th className="w-20">Price</th>
                <th className="w-20">
                  <span className="max-cartMini:hidden">Quantity</span>
                  <span className="hidden max-cartMini:block">Qty</span>
                </th>
                <th className="w-20">Subtotal</th>
                <th className="w-5">Remove</th>
              </tr>
            </thead>
            <tbody className="">{list}</tbody>
          </table>
          {cartValue.cartItems.length < 1 ? (
            <></>
          ) : (
            <>
              <div className="w-full flex justify-between h-20 items-center">
                {!isAuthenticated ? (
                  <button className="px-4 py-2 bg-green-600 font-semibold text-white max-sm:text-sm max-cartMini:text-xs rounded-sm transition-all hover:bg-green-5 00 hover:rounded-lg hover:text-slate-700" onClick={()=>alert("Login first")}>
                    Proceed to Payment
                  </button>
                ) : (
                  <NavLink to="/">
                    <button className="px-4 py-2 bg-green-600 font-semibold text-white max-sm:text-sm max-cartMini:text-xs rounded-sm transition-all hover:bg-green-5 00 hover:rounded-lg hover:text-slate-700">
                      Proceed to Payment
                    </button>
                  </NavLink>
                )}
                <button
                  className="bg-red-600 text-slate-900 font-semibold py-2 px-4 max-sm:text-sm max-cartMini:text-xs rounded-sm transition-all hover:bg-red-800 hover:rounded-lg hover:text-slate-100"
                  onClick={() => {
                    cartValue.setCartItems([]);
                  }}
                >
                  Clear Cart
                </button>
              </div>
              <FinalCart />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItems;
