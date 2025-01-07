import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FullStack } from "./screens/Fullstack/Fullstack";
import { Backend } from "./screens/Backend/Backend";
import { Frontend } from "./screens/Frontend/Frontend";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullStack />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/frontend" element={<Frontend />} />
      </Routes>
    </BrowserRouter>
  );
}
