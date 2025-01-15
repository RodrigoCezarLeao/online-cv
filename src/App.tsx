import './App.css'
import { useLang } from './hooks/useLang';
import AppRoutes from './router';

function App() {
  const {lang, changeLang} = useLang();
  return <AppRoutes lang changeLang/>;
}

export default App
