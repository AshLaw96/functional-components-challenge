import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/Challenge2";
import Challenge4 from "./components/Challenge4";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Challenge4 />
    </div>
  );
}

export default App;
