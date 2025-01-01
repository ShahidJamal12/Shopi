/* eslint-disable react/prop-types */
import { useContext } from "react";
import { count } from "../../App";
const CartTable = ({productImage, productName, productPrice, productQuantity, productTotalPrice ,indexNumber}) => {
  let cartValue = useContext(count)
  return (
    <tr className="border-t border-b h-full">
      <td className="p-3 w-full flex justify-center items-center gap-3 flex-row max-sm:flex-col max-sm:gap-0">
        <img src={productImage} className="w-10 rounded-full max-sm:w-8 lg:w-20"/>
        <div className="w-full overflow-hidden whitespace-pre-wrap max-sm:text-[10px] max-cartMini:text-[7px] text-ellipsis">
        {productName}
        </div>
      </td>
      <td className="p-3">{productPrice}</td>
      <td className="p-3">{productQuantity}</td>
      <td className="p-3">{productTotalPrice}</td>
      <td className="">
        <i className="fa-solid fa-trash py-3 px-4 rounded-full text-sm xl:text-xl text-red-800 transition-all hover:bg-slate-400 hover:text-red-500 max-cartMini:text-xs" onClick={()=>{
            console.log(indexNumber)
            let finalData = cartValue.cartItems.filter((v, i) => i != indexNumber);
            cartValue.setCartItems(finalData)
            // alert(finalData)
        }}></i>
      </td>
    </tr>
  )
}

export default CartTable