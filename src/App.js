import { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [input]);

  return (
    <div className="app">
      <h1>TODO React Firebase</h1>

      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={addTodo}
            disabled={!input}
          >
            Add Todo
          </Button>
        </FormControl>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} arr={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
