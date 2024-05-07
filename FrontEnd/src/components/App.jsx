import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-in" element={<Login />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
