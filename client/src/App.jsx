import { Routes, Route, useNavigate } from 'react-router-dom'

import { Paths } from './utils/Paths'
import { AuthProvider } from './contexts/authContext'

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
import TeamList from "./components/team-list/TeamList"
import Topbar from "./components/topbar/Topbar"
import Contact from './components/contact/Contact'
import PackageCreate from './components/package-create/PackageCreate'
import PackageDetails from './components/package-details/PackageDetails'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import DestinationCreate from './components/destination-create/DestinationCreate'
import ErrorBoundary from './components/error/ErrorBoundary'
import ReviewEdit from './components/reviews/review-edit/ReviewEdit'
import AdminGuard from './guards/AdminGuard'
import AuthGuard from './guards/AuthGuard'
import ReviewDelete from './components/reviews/review-delete/ReviewDelete'
import BookingList from './components/booking/booking-list/BookingList'
import ContactList from './components/contact-list/ContactList'
import Newsletter from './components/newsletter/Newsletter'
import SearchResult from './components/search-result/SearchResult'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Topbar />
        <Navbar />

        <Routes>
          <Route path={Paths.home} element={<Home />} />
          <Route path={Paths.about} element={<About />} />
          <Route path={Paths.services} element={<ServiceList />} />
          <Route path={Paths.destinations} element={<DestinationList />} />
          <Route path={Paths.packages} element={<PackageList />} />
          <Route path={Paths.packageDetails} element={<PackageDetails />} />
          <Route path={Paths.processing} element={<Process />} />
          <Route path={Paths.team} element={<TeamList />} />
          <Route path={Paths.contact} element={<Contact />} />
          <Route path={Paths.login} element={<Login />} />
          <Route path={Paths.register} element={<Register />} />
          <Route path={Paths.searchResult} element={<SearchResult />} />

          <Route element={<AuthGuard />}>
            <Route path={Paths.reviewEdit} element={<ReviewEdit />} />
            <Route path={Paths.reviewDelete} element={<ReviewDelete />} />
            <Route path={Paths.booking} element={<Booking />} />
            <Route path={Paths.logout} element={<Logout />} />
          </Route>

          <Route element={<AdminGuard />}>
            <Route path={Paths.bookings} element={<BookingList />} />
            <Route path={Paths.contacts} element={<ContactList />} />
            <Route path={Paths.newsletter} element={<Newsletter />} />
            <Route path={Paths.destinationCreate} element={<DestinationCreate />} />
            <Route path={Paths.packageCreate} element={<PackageCreate />} />
          </Route>

          <Route path={Paths.other} element={<NotFound />} />

        </Routes>

        <Footer />
        <BackToTop />
      </AuthProvider>
    </ErrorBoundary>

  )
}

export default App
