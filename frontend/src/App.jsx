import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HelpCentre from "./pages/HelpCentre";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-centre" element={<HelpCentre />} />
      </Routes>
    </Router>
    </div>
  );
}
