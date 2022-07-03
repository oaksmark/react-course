import DataItem from '../DataItem/DataItem';
import Button from '../UI/Button/Button';
import './UserDataList.css';

const UserDataList = (props) => {
  return (
    <ul className="list-card">
      {props.datas.map((data) => (
        <DataItem key={data.id} id={data.id}>
          <p>{data.text}</p>
          <p>{`${data.age} years old`}</p>
          <Button><b>Delete</b></Button>
        </DataItem>
      ))}
    </ul>
  );
};

export default UserDataList;
