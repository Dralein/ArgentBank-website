import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Login from "./pages/login";

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
