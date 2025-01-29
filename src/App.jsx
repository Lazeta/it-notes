import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { Line } from './components/line/Line';
import "./App.css";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <Line />
      <Body />
    </div>
  );
}

export default App;