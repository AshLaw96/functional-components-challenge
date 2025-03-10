import css from "./App.module.css";
import NavBarSimple from "./components/Challenge";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;
