import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import Services from './pages/Services/Services'
import Testimonials from './pages/Testimonials/Testimonials'
import Clients from './pages/Clients/Clients'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services/>
      <Portfolio/>
      <Resume/>
      <Testimonials/>
      <Clients/>
      <Contact/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <div style={{backgroundColor: '#282a30'}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
