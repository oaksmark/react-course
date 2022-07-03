import React, { useState } from "react";
import NewUserData from "./components/UserData/NewUserData";
import UserDataList from "./components/UserDataList/UserDataList";

const App = () => {

  const [userData, setUserData] = useState([
    { text: "João", age: "35", id: "01" },
    { text: "Maria", age: "36", id: "02" },
  ]);

  const addNewUser = (enteredNameValue, enteredAgeValue) => {
    setUserData((prevDatas) => {
      const updatedDatas = [...prevDatas];
      updatedDatas.unshift({ text: enteredNameValue, age: enteredAgeValue, id: Math.random().toString() });
      return updatedDatas;
    });
  };
    console.log(userData);

  return (
    <div>
      <NewUserData newUser={addNewUser} />
      <UserDataList datas={userData}/>
    </div>
  );
};

export default App;
