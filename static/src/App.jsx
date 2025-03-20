import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { MyTickets } from "./pages/MyTickets.jsx";
import { Movies } from "./pages/Movies.jsx";
import { UpcomingMovies } from "./pages/UpcomingMovies.jsx";
import { Cinemas } from "./pages/Cinemas.jsx";
import { Profile } from "./pages/Profile.jsx";
import { ShoppingHistory } from "./pages/ShoppingHistory.jsx";
import { EditProfile } from "./pages/EditProfile.jsx";
import { TicketDetail } from "./pages/TicketDetail.jsx";
import { MovieDetail } from "./pages/MovieDetail.jsx";
import { MovieBooking } from "./pages/MovieBooking.jsx";
import { MovieReservation } from "./pages/MovieReservation.jsx";
import { MoviePayment } from "./pages/MoviePayment.jsx";
import { Register } from "./pages/Register.jsx";
import AuthMiddleware from "./middleware/AuthMiddleware.jsx";
import {Login} from "./pages/Login.jsx";
import auth from "./api/auth.js";

function App() {
  const hasLogin = auth.checkLoginStatus();

  return (
    <BrowserRouter>
      <AuthMiddleware isAuth={hasLogin} excludeRoutes={[
        "/",
        "/my-tickets",
        "/movies",
        "/movies/upcoming",
        "/movies/:id",
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
