import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './DataItem.module.css';

const DataItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };
    return (
      <Card>
        <li className={classes.item}>
          {props.children}
          <Button  onClick={deleteHandler}>Delete</Button>
        </li>
      </Card>
    )
};

export default DataItem;