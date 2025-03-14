import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout.jsx";
import {Home} from "./pages/Home.jsx";
import {MyTickets} from "./pages/MyTickets.jsx";
import {Movies} from "./pages/Movies.jsx";
import {UpcomingMovies} from "./pages/UpcomingMovies.jsx";

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
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/upcoming" element={<UpcomingMovies />} />
              </Routes>
            </DefaultLayout>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
