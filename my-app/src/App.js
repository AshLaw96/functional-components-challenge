import css from "./App.module.css";
import ContentHooks from "./components/ContentHooks";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/Challenge2";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;
