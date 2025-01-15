import { useState } from 'react';
import './App.css'
import AppRoutes from './router';
import { Lang } from './components/lang/lang';
import { LangKey } from './models/langText';

function App() {
  const [lang, setLang] = useState<LangKey>("pt");

  return <>
    <Lang setLang={setLang} />
    <AppRoutes lang={lang} />;
  </>
}

export default App
