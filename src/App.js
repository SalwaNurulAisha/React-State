import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Counter />
      <Login />
      <Login2 />
      <Todo />
    </div>
  );
}

export default App;
