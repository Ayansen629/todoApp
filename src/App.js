import React, { useState ,useEffect} from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads,we need to listen to the database and fetch new todos as they get addes/removed

  useEffect(()=>{
    //this code here..fires when the app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))

    })

  },[])
  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the page refreshment
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput(""); //clear up the input after clicking submit
    console.log("todos", todos);
  };
  return (
    <div className="App">
      <h1> Welcome to Todo App</h1>
      <form>
        <FormControl>
          <InputLabel> Write a Todo ✅ </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
