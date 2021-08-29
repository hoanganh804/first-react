import "./App.css";
import TodoList from "./component/TodoList/TodoList";
import ClickMe from "./component/ClickMe";
import ColorBox from "./component/ColorBox";
// import PageTest from "./component/PageTest/PageTest";
import Clock from "./component/Clock/Clock";

function App() {
  return (
    <div className="App">
      <ClickMe />
      <ColorBox />
      <TodoList />
      {/* <PageTest /> */}
      <Clock />
    </div>
  );
}

export default App;
