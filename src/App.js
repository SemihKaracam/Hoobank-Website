import "./App.css"
import Billing from "./components/Billing/Billing"
import Business from "./components/Business/Business"
import Card from "./components/Card/Card"
import Clients from "./components/Clients/Clients"
import Cta from "./components/Cta/Cta"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Stats from "./components/Stats/Stats"
import Testimonials from "./components/Testimonials/Testimonials"
function App(){
  return(
    <div className="App">
      <Navbar/>
      <Hero/>
      <Stats/>
      <Business/>
      <Billing/>
      <Card/>
      <Testimonials/>
      <Clients/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App