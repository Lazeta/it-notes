import "./styles/app.css";
import { Header } from './components/header/Header';
import { Line } from './components/line/Line';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;