import ContactSection from "./Components/ContactSection"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"

const Contact = () => {
  return (
    <>
    <NavBar/>
    <div className="text-slate-100">
    <ContactSection/>
    <Footer/>
    </div>
    </>
  )
}

export default Contact