import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/Challenge2";
import Challenge5 from "./components/Challenge5";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Challenge5 />
    </div>
  );
}

export default App;
