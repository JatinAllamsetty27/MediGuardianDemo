import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import PrivateRoute from './components/PrivateRoute';
import Services from "./pages/Services";
import ForgotPassword from "./pages/ForgotPassword";
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <><Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />}/>
        </Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>



      </Routes>
    </Router><ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" /></>
  );
}

export default App;
