import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FullStack } from "./screens/Fullstack/Fullstack";
import { Backend } from "./screens/Backend/Backend";
import { Frontend } from "./screens/Frontend/Frontend";
import { Home } from "./screens/Home/home";
import { Project } from "./components/projeto/project";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/fullstack/:slug" element={<Project />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/frontend" element={<Frontend />} />
      </Routes>
    </BrowserRouter>
  );
}
