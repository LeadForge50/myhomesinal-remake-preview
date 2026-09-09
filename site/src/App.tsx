import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Buyers from './pages/Buyers'
import Sellers from './pages/Sellers'
import About from './pages/About'
import Guide from './pages/Guide'
import GuideArticle from './pages/GuideArticle'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter basename="/myhomesinal-remake-preview">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buyers" element={<Buyers />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="about" element={<About />} />
          <Route path="areas" element={<Navigate to="/#featured-areas" replace />} />
          <Route path="guide" element={<Guide />} />
          <Route path="guide/:slug" element={<GuideArticle />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-lg px-4 py-24 text-center">
                <h1 className="mb-3 font-display text-3xl font-bold">Page not found</h1>
                <Link to="/" className="text-era hover:underline">
                  Back home
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
