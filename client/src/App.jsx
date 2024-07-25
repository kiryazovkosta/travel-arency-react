import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
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
import Contact from './components/contact/Contact'
import PackageCreate from './components/package-create/PackageCreate'
import PackageDetails from './components/package-details/PackageDetails'

function App() {

  return (
    <>
      {/* <Spiner /> */}

      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<ServiceList />} />

        <Route path="/destinations" element={<DestinationList />} />

        <Route path="/packages" element={<PackageList />} />
        <Route path="/packages/create" element={<PackageCreate />} />
        <Route path="/packages/:id" element={<PackageDetails />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/process" element={<Process />} />
        <Route path="/team" element={<TeamList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
