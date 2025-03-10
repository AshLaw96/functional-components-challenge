import css from "./App.module.css";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className={css.App}>
      <StatefulGreetingWithPrevState name="Ash" />
    </div>
  );
}

export default App;
