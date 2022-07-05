import DataItem from "../DataItem/DataItem";

const UserDataList = (props) => {
  return (
    <ul>
      {props.datas.map((data) => (
        <DataItem key={data.id} id={data.id} onDelete={props.onDeleteItem}>
          <p>{data.text}</p>
          <p>{`${data.age} years old`}</p>
        </DataItem>
      ))}
    </ul>
  );
};

export default UserDataList;
