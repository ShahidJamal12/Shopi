import Card from './Card'
import { useContext } from 'react'
import { apiData, searchData } from '../../App'
const Products = () => {
  const APIdata = useContext(apiData);
  const search = useContext(searchData)
  // let b = search.search.charAt(0).toUpperCase() + search.search.slice(1)
  const searcedData = APIdata.filter((item)=> item.title.includes(search.search))
  // let a = "hello"
  // console.log(b)
  return (
    <div className="products relative top-28 flex justify-center items-center flex-wrap p-5 gap-10">
      {
        !search.search? 
        (
          APIdata.map((value,index)=>{
            let price = new Intl.NumberFormat("en-IN", {maximumSignificantDigits: 3}).format(value.price * 85.39)
            return <Card
            imgSrc={value.images[0]}
            key={index}
            cardTitle={value.title}
            price={price}
            indexNumber={value.id}
            indexNum={value.id}
            category={value.category.name}
            SP_id={value.id}
            />
          })
        ):
        (
          searcedData.map((value,index)=>{
            let price = new Intl.NumberFormat("en-IN", {maximumSignificantDigits: 3}).format(value.price * 85.39)
            return <Card
            imgSrc={value.images[0]}
            key={index}
            cardTitle={value.title}
            price={price}
            indexNumber={value.id}
            indexNum={value.id}
            category={value.category.name}
            SP_id={value.id}
            />
          })
          // <div>
          //   adfjasdl
          // </div>
        )
      }
    </div>
  )
}

export default Products