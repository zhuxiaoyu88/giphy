import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import IronManList from "./pages/IronManList";
import SearchIronMan from "./pages/SearchIronMan";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list" element={<IronManList />} />
        <Route path="/search" element={<SearchIronMan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
