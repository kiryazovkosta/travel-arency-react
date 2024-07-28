import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { Paths } from './utils/Paths'
import { AuthProvider } from './contexts/authContext'
import * as userService from './services/userService'

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

function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await userService.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Paths.home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await userService.register(values.email, values.password, values.username, values.avatar);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Paths.home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
    navigate(Paths.home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthProvider value={values} >
      <>
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

          <Route path={Paths.all} element={<NotFound />} />
        </Routes>

        <Footer />
        <BackToTop />
      </>
    </AuthProvider>
  )
}

export default App
