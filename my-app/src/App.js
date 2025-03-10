import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/Challenge2";
import Content from "./components/Challenge3";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
