import CartTable from "./CartTable"
import { count } from "../../App"
import { useContext } from "react"
const CartItems = () => {
  let cartValue = useContext(count)
  let cartItem = cartValue.cartItems
  console.log(cartItem)
  let list = cartItem.map((value,index)=>{
    let Price = `${Math.round(value.price * 85.59)}`
    let finalPrice = `₹${new Intl.NumberFormat("en-IN", {maximumSignificantDigits: 3}).format(Price)}`
    let totalPrice = `${Math.round(value.price * value.quantity * 85.59)}`
    let finaltotalPrice = `₹${new Intl.NumberFormat("en-IN", {maximumSignificantDigits: 3}).format(totalPrice)}`
    return (
      <CartTable productImage={value.images[0]} productName={value.title} productPrice={finalPrice} productQuantity={value.quantity} key={index} productTotalPrice={finaltotalPrice} indexNumber={index}/>
    )
  })
  return (
    <>
    <div className="relative top-40 px-20 pb-20">
      <div className="w-full">
        <table className="w-full text-center border-2 border-black">
          <thead>
          <tr>
            <th className="w-20 border-2 border-black">Product Images</th>
            <th className="w-20 border-2 border-black">Product Name</th>
            <th className="w-20 border-2 border-black">Product Price</th>
            <th className="w-20 border-2 border-black">Product Quantity</th>
            <th className="w-20 border-2 border-black">Product Subtotal</th>
            <th className="w-5 border-2 border-black">Delete Product</th>
          </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default CartItems