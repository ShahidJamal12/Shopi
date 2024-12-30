import Card from './Card'
import { useContext } from 'react'
import { apiData } from '../../App'
const Products = () => {
  const APIdata = useContext(apiData);
  return (
    <div className="products relative top-28 flex justify-center items-center flex-wrap p-5 gap-10">
      {
        APIdata.map((value,index)=>{
          return <Card
          imgSrc={value.images[0]}
          key={index}
          cardTitle={value.title}
          price={value.price * 85.39}
          indexNumber={value.id}
          indexNum={value.id}
          category={value.category.name}
          SP_id={value.id}
          />
        })
      }
    </div>
  )
}

export default Products