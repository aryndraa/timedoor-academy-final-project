import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { MyTickets } from "./pages/my-ticket/MyTickets.jsx";
import { Movies } from "./pages/movie/Movies.jsx";
import { UpcomingMovies } from "./pages/movie/UpcomingMovies.jsx";
import { Cinemas } from "./pages/cinema/Cinemas.jsx";
import { Profile } from "./pages/profile/Profile.jsx";
import { ShoppingHistory } from "./pages/profile/ShoppingHistory.jsx";
import { EditProfile } from "./pages/profile/EditProfile.jsx";
import { TicketDetail } from "./pages/my-ticket/TicketDetail.jsx";
import { MovieDetail } from "./pages/movie/MovieDetail.jsx";
import { MovieBooking } from "./pages/movie/MovieBooking.jsx";
import { MovieReservation } from "./pages/movie/MovieReservation.jsx";
import { MoviePayment } from "./pages/movie/MoviePayment.jsx";
import { Register } from "./pages/profile/Register.jsx";
import AuthMiddleware from "./middleware/AuthMiddleware.jsx";
import {Login} from "./pages/profile/Login.jsx";

function App() {
  const hasLogin = true;

  return (
    <BrowserRouter>
      <AuthMiddleware isAuth={hasLogin} excludeRoutes={[
        "/",
        "/my-tickets",
        "/movie",
        "/movie/upcoming",
        "/movie/:id",
        "/cinemas",
        "/register",
        "/login"
      ]}>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/my-tickets/:id" element={<TicketDetail />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/upcoming" element={<UpcomingMovies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/:id/booking" element={<MovieBooking />} />
            <Route path="/movies/:id/booking/reservation" element={<MovieReservation />} />
            <Route path="/movies/:id/booking/payment" element={<MoviePayment />} />
            <Route path="/cinemas" element={<Cinemas />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/shopping-history" element={<ShoppingHistory />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </DefaultLayout>
      </AuthMiddleware>
    </BrowserRouter>
  );
}

export default App;
