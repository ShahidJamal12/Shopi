import { useAuth0 } from "@auth0/auth0-react"
import NavBar from "./Components/NavBar"
import Profile from "./Components/Profile"
import CartItems from "./Components/CartItems"
const Cart = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <>
      <NavBar/>
      {
        isAuthenticated?
        (
          <>
          <Profile/>
          <CartItems/>
          </>
        ):
        (
          <>
          
          </>
        )
      }
    </>
  )
}

export default Cart