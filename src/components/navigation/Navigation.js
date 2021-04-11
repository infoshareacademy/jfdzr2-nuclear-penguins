import styles from '../navigation/navigation.module.css';

// import {NavLink} from 'react-router-dom';
export const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <h1 className={styles.logo}>My Task Bar</h1>
        <ul className={styles.menu_navigation}>
          {/* <li className={styles.add}>
            <NavLink className="tableAddingBtn" to={'/bartable/tableAdder'}>
              +
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <div className="footer_space--nav"></div>
    </>
  );
};
