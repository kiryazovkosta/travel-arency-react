import About from "./components/about/About"
import BackToTop from "./components/back-to-top/BackToTop"
import Booking from "./components/booking/Booking"
import DestinationList from "./components/destination-list/DestinationList"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import NotFound from "./components/not-found/NotFound"
import PackageList from "./components/package-list/PackageList"
import Process from "./components/process/Process"
import ServiceList from "./components/service-list/ServiceList"
import Spiner from "./components/spinner/Spiner"
import TeamList from "./components/team-list/TeamList"
import Topbar from "./components/topbar/Topbar"

function App() {

  return (
    <>
      {/* <Spiner /> */}

      <Topbar />
      <Navbar />

      <About />
      <ServiceList />
      <DestinationList />
      <PackageList />
      <Booking />
      <Process />
      <TeamList />
      <NotFound />

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
