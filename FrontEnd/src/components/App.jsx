import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedProfileRoute from "./routes/Privateprofile"
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/Privatelogin";
import Error404 from "./pages/Error";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedProfileRoute>
              <Profile />
            </ProtectedProfileRoute>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
