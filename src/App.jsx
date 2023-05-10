import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(baseUrl)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="avatar">
      <div className="imgRender">
        <img src={users[currentIndex]?.avatar} alt="" />
      </div>
      <div className="button_block">
      <button onClick={handlePrev}>Назад</button>
      <button onClick={handleNext}>Вперед</button>
      </div>
    </div>
  );
};

export default App;