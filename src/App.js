import React, { useState } from "react";
import NewUserData from "./components/UserForm/NewUserData";
import UserDataList from "./components/UserDataList/UserDataList";
import Card from "./components/UI/Card/Card";

const App = () => {
  const [userData, setUserData] = useState([
    { name: "João", age: "35", id: "01" },
    { name: "Maria", age: "36", id: "02" },
  ]);

  const addNewUserHandler = (enteredNameValue, enteredAgeValue) => {
    setUserData((prevDatas) => {
       return [...prevDatas,{
        name: enteredNameValue,
        age: enteredAgeValue,
        id: Math.random().toString(),
      }];
    });
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
  // console.log(userData);

  return (
    <React.Fragment>
      <NewUserData onAddUser={addNewUserHandler} />
      {content}
    </React.Fragment>
  );
};

export default App;
