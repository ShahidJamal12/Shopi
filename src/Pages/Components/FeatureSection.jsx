import { useContext } from "react";
import Card from "./Card";
import { apiData } from "../../App";

const FeatureSection = () => {
  const APIdata = useContext(apiData);
  const featuredData = APIdata.filter((item) => item.featured === true);
  console.log(featuredData);
  console.log(APIdata);
  return (
    <section className="feature-section w-screen h-full relative top-20 flex justify-center items-start py-20">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-semibold text-slate-800 text-center">
          Our Features Products
        </h1>
        <div className="products flex justify-center items-center mt-16 gap-10 flex-wrap">
          {featuredData.map((value, index) => {
            let price = new Intl.NumberFormat("en-IN", {maximumSignificantDigits: 3}).format(value.price * 85.39)
            return (
              <Card
                imgSrc={value.images[1]}
                key={index}
                id={value.id}
                cardTitle={value.title}
                price={price}
                indexNumber={value.id}
                indexNum={value.id}
                category={value.category.name}
                SP_id={value.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
