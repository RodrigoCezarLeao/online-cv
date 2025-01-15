import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FullStack } from "./screens/Fullstack/Fullstack";
import { Backend } from "./screens/Backend/Backend";
import { Frontend } from "./screens/Frontend/Frontend";
import { Home } from "./screens/Home/home";
import { Project } from "./components/project/project";
import { LangKey } from "./models/langText";

interface AppRoutesProps {
  lang: LangKey;  
}

export default function AppRoutes(props: AppRoutesProps) {
  const {lang} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStack lang={lang}/>} />
        <Route path="/fullstack/:slug" element={<Project lang={lang}/>} />
        <Route path="/backend" element={<Backend lang={lang}/>} />
        <Route path="/frontend" element={<Frontend lang={lang}/>} />
      </Routes>
    </BrowserRouter>
  );
}
