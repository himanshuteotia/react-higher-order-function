import Hoc1 from "./hoc1";
import "./styles.css";
import HOC1 from "./hoc1";
import HOC2 from "./hoc2";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <HOC1>
        <p>Here is HOC1...</p>
      </HOC1>

      <HOC2>
        <p>Here is HOC1...</p>
      </HOC2>
    </div>
  );
}
