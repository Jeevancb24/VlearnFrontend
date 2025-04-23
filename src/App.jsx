import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Signup from "./pages/Signup";
import "./App.css";
import Chatroom from "./pages/Chatroom";
import AquireDetails from "./pages/AquireDetails";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Layout Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/work" element={<AquireDetails />} />
        <Route path="/chat" element={<Chatroom />} />
      </Route>
    </Routes>
  );
}

export default App;
