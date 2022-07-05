import React, { useState } from "react";
import NewUserData from "./components/UserForm/NewUserData";
import UserDataList from "./components/UserDataList/UserDataList";
import Card from "./components/UI/Card/Card";

const App = () => {
  const [userData, setUserData] = useState([
    { text: "João", age: "35", id: "01" },
    { text: "Maria", age: "36", id: "02" },
  ]);

  const addNewUser = (enteredNameValue, enteredAgeValue) => {
    setUserData((prevDatas) => {
      const updatedDatas = [...prevDatas];
      updatedDatas.unshift({
        text: enteredNameValue,
        age: enteredAgeValue,
        id: Math.random().toString(),
      });
      return updatedDatas;
    });
  console.log(userData);
  };

  const deleteItemHandler = (dataId) => {
    setUserData((prevDatas) => {
      const updatedDatas = prevDatas.filter((data) => data.id !== dataId);
      return updatedDatas;
    });
  };

  let content = (
    <Card>
      <p style={{ color: "black", textAlign: "center" }}>
        No Datas found. Maybe add one?
      </p>
    </Card>
  );

  if (userData.length > 0) {
    content = (
      <UserDataList datas={userData} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section>
        <NewUserData newUser={addNewUser} />
      </section>
      <section>{content}</section>
    </div>
  );
};

export default App;
