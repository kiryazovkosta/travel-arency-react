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
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'

import { Paths } from './utils/Paths'

function App() {

  return (
    <>
      {/* <Spiner /> */}

      <Topbar />
      <Navbar />

      <Routes>
        <Route path={Paths.home} element={<Home />} />
        <Route path={Paths.about} element={<About />} />

        <Route path={Paths.services} element={<ServiceList />} />
        <Route path={Paths.destinations} element={<DestinationList />} />

        <Route path={Paths.packages} element={<PackageList />} />
        <Route path={Paths.packageCreate} element={<PackageCreate />} />
        <Route path={Paths.packageDetails} element={<PackageDetails />} />

        <Route path={Paths.booking} element={<Booking />} />
        <Route path={Paths.processing} element={<Process />} />
        <Route path={Paths.team} element={<TeamList />} />
        <Route path={Paths.contact} element={<Contact />} />

        <Route path={Paths.login} element={<Login />} />
        <Route path={Paths.register} element={<Register />} />
        <Route path={Paths.logout} element={<Logout />} />

        <Route path={Paths[404]}element={<NotFound />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
