import Button from '../UI/Button/Button';
import styles from './UserForm.module.css';

const UserForm = () => {
    return (
    <form >
    <div className={`${styles['form-control']}`}>
      <label>User Name</label>
      <input type="text" />
      <label>Age (Years)</label>
      <input type="text" />
    <Button/>
    </div>
  </form>
    );
};

export default UserForm;