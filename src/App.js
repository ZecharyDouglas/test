import logo from "./logo.svg";
import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { Users } from "./models";
import { useState } from "react";

function App() {
  const [data, setdata] = useState();
  const postData = async () => {
    await DataStore.save(
      new Users({
        name: "The Admin Guy",
        college_level: "Senior",
        email: "zecharydouglas@testemail.com",
        password: "adfadf",
        college: "Cuny College of Staten Island",
        major: "Computer Science",
        course_interests: "Data Structures",
      })
    );
  };

  const fetchData = async () => {
    const newData = await DataStore.query(Users);
    setdata(newData);
    console.log(data);
  };

  return (
    <div className="App">
      <div>Hello</div>

      <button onClick={postData}>Post</button>

      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}

export default App;
