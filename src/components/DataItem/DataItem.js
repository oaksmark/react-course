import './DataItem.css';

const DataItem = props => {
    return (
        <li className='data-item'>
          {props.children}
        </li>
    )
};

export default DataItem;