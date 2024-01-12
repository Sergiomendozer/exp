import "./styles.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
      </div>
      <h2>hello</h2>
    </div>
  );
}
