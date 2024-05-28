import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./Privateroutes";
import Error404 from "./pages/Error"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error404/>}/>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute protect={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute protect={true}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
