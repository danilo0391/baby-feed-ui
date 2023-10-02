import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []); //How to use useEffect once-upon-time?

  const fetchItem = () => {
    fetch("http://localhost:8080/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Listinha de fraldas</h1>
      <div>
        {item.length > 0 && (
          <ul>
            {item.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
