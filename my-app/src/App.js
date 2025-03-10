import css from "./App.module.css";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";

function App() {
  return (
    <div className={css.App}>
      <StatefulGreetingWithCallback
        greeting="I'm a stateful class component"
        name="Ash"
      />
    </div>
  );
}

export default App;
