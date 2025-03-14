import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout.jsx";
import {Home} from "./pages/Home.jsx";
import {MyTickets} from "./pages/MyTickets.jsx";
import {Movies} from "./pages/Movies.jsx";
import {UpcomingMovies} from "./pages/UpcomingMovies.jsx";
import {Cinemas} from "./pages/Cinemas.jsx";
import {Profile} from "./pages/Profile.jsx";
import {ShoppingHistory} from "./pages/ShoppingHistory.jsx";
import {EditProfile} from "./pages/EditProfile.jsx";
import {TicketDetail} from "./pages/TicketDetail.jsx";
import {MovieDetail} from "./pages/MovieDetail.jsx";
import {MovieBooking} from "./pages/MovieBooking.jsx";
import {MovieReservation} from "./pages/MovieReservation.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="*" element={
            <DefaultLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-tickets" element={<MyTickets />} />
                <Route path="/my-tickets/:id" element={<TicketDetail />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/upcoming" element={<UpcomingMovies />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/movies/:id/booking" element={<MovieBooking />} />
                <Route path="/movies/:id/reservation" element={<MovieReservation />} />
                <Route path="/cinemas" element={<Cinemas />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/profile/shopping-history" element={<ShoppingHistory />} />
              </Routes>
            </DefaultLayout>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
