import { useContext } from "react"
import { count } from "../../App"
const FinalCart = () => {
  let randomDis = Math.floor(Math.random() * (10000 - 100 + 1)) + 100
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
  return (
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
                          `₹${new Intl.NumberFormat("en-IN", {
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
                          `₹${new Intl.NumberFormat("en-IN", {
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
  )
}

export default FinalCart