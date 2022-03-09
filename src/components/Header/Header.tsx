import styles from './styles.module.scss';
import logoImg from '../../assets/todoIcon.png';

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={logoImg} alt="" />
            <h1>To-do list</h1>
        </div>
    )
}