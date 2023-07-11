import PropTypes from 'prop-types';
import styles from './header.module.scss';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {children}
        <button className={styles.exit} type="button">Выход</button>
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
