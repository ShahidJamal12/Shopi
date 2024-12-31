/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CartTable = ({productImage, productName, productPrice, productQuantity, productTotalPrice ,indexNumber}) => {
  return (
    <tr>
      <td className="border-2 p-3 flex justify-center"><img src={productImage} alt="Product Image" className="rounded-full w-20" /></td>
      <td className="border-2 p-3">
        {productName}
      </td>
      <td className="border-2 p-3">{productPrice}</td>
      <td className="border-2 p-3">{productQuantity}</td>
      <td className="border-2 p-3">{productTotalPrice}</td>
      <td className="border-2">
        <i className="fa-solid fa-trash py-3 px-4 rounded-full text-xl text-red-800 transition-all hover:bg-slate-400 hover:text-red-500" onClick={()=>{
            console.log(indexNumber)
        }}></i>
      </td>
    </tr>
  )
}

export default CartTable