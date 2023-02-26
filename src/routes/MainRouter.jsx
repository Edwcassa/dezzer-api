import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Albumes from "../pages/Albumes";
import Artistas from "../pages/Artistas";
import Canciones from "../pages/Canciones";

export default function MainRouter() {

  const Page = () => <h1>Page</h1>
  const ErrorPage = () => <h1>404 | NOT FOUND</h1>
  return (
    <Dashboard>
      <Routes>
        <Route path='/' element={<Artistas />} />
        <Route path='/artistas' element={<Artistas />} />
        <Route path='/albumes/' element={<Albumes />} />
        <Route path='/canciones' element={<Canciones />} />
        <Route path='/estaciones' element={<Page />} />

        <Route path='/metal' element={<Page />} />
        <Route path='/rock' element={<Page />} />
        <Route path='/bailar' element={<Page />} />
        <Route path='/baladas' element={<Page />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Dashboard>
  )
}
