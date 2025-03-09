import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout.jsx";
import {Home} from "./pages/Home.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="*" element={
            <DefaultLayout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </DefaultLayout>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
