import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const text = useRef("");
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    // axios.delete();
  };

  const Add = () => {
    console.log(text.current.value);
    axios.post("http://localhost:5000/add", {
      text: text.current.value,
    });
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    axios.patch("http://localhost:5000/checked",{
      
    })
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        console.log(response.data.data);
      })
      .then((data) => {
        console.log(data);
        setList(data.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input placeholder="what's next?" ref={text} />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
