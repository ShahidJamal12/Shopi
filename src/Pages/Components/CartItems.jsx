import CartTable from "./CartTable";
import { count } from "../../App";
import { useContext } from "react";
const CartItems = () => {
  let cartValue = useContext(count);
  let cartItem = cartValue.cartItems;
  let priceArr = [];
  let priceValue = 0;
  for (const element of cartItem) {
    console.log(Math.round(element.price * 85.59 * element.quantity));
    priceArr.push(Math.round(element.price * 85.59 * element.quantity));
  }
  for (let i = 0; i < priceArr.length; i++) {
    priceValue += priceArr[i];
  }
  let priceVal = `${new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(priceValue)}`;
  let randomDis = Math.floor(Math.random() * (10000 - 100 + 1)) + 100
  console.log(cartItem);
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
                <button className="px-4 py-2 bg-green-600 font-semibold text-white max-sm:text-sm max-cartMini:text-xs rounded-sm transition-all hover:bg-green-5 00 hover:rounded-lg hover:text-slate-700">
                  Proceed to Payment
                </button>
                <button
                  className="bg-red-600 text-slate-900 font-semibold py-2 px-4 max-sm:text-sm max-cartMini:text-xs rounded-sm transition-all hover:bg-red-800 hover:rounded-lg hover:text-slate-100"
                  onClick={() => {
                    cartValue.setCartItems([]);
                  }}
                >
                  Clear Cart
                </button>
              </div>
              <div className="w-full flex justify-end items-center">
                <div className="w-96 bg-white shadow-2xl shadow-slate-800 rounded-lg">
                  <header className="h-14 flex justify-start items-center px-5 text-2xl font-semibold border-b-2 border-b-slate-500 text-slate-800">
                    Price Details
                  </header>
                  <div className="px-5 flex justify-center items-center flex-col gap-5">
                    <div className="w-full flex justify-between items-center mt-5 text-xl">
                      <div className="">
                        Price ({cartValue.cartItems.length} items)
                      </div>
                      <div className="text-red-500">₹{priceVal}</div>
                    </div>
                    <div className="w-full flex justify-between items-center text-xl">
                      <div className="">Discount</div>
                      <div className="text-violet-500">
                        -
                        {
                          `${new Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(
                            randomDis
                          )}`
                          // ( priceValue - Math.floor(Math.random() * (10000 - 100 + 1)) + 100)
                        }
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center text-xl font-semibold border-t">
                      <div className="">Total Amount</div>
                      <div className="">
                        {
                          `${new Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(
                           priceValue - randomDis
                          )}`
                        }
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center text-xl border-t pb-3 text-violet-500">
                      {
                        `You will save ₹${new Intl.NumberFormat("en-IN", {
                          maximumSignificantDigits: 3,
                        }).format(
                          randomDis
                        )} on this order`
                      }
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItems;
