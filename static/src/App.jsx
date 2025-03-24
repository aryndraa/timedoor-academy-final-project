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
  const hasLogin = false;

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
            <Route path="my-tickets/*" >
              <Route path="" element={<MyTickets />} />
              <Route path=":id" element={<TicketDetail />} />
            </Route>

            <Route path="movies/*">
              <Route path="" element={<Movies />} />
              <Route path="upcoming" element={<UpcomingMovies />} />
              <Route path=":id" element={<MovieDetail />} />
              <Route path=":id/booking" element={<MovieBooking />} />
              <Route path=":id/booking/reservation" element={<MovieReservation />} />
              <Route path=":id/booking/payment" element={<MoviePayment />} />
            </Route>

            <Route path="/cinemas" element={<Cinemas />} />

            <Route path="/profile/*">
              <Route path="" element={<Profile />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path="shopping-history" element={<ShoppingHistory />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </DefaultLayout>
      </AuthMiddleware>
    </BrowserRouter>
  );
}

export default App;
