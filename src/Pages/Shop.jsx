import NavBar from "./Components/NavBar"
import { useContext } from "react";
import { apiData } from "../App";
import Products from "./Components/Products";
import SearchBar from "./Components/SearchBar";
const Shop = () => {
  const APIdata = useContext(apiData);
  console.log(APIdata)
  return (
    <>
    <NavBar/>
    <SearchBar/>
    <Products/>
    </>
  )
}

export default Shop