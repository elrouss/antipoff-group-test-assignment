import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../utils/constants';
import styles from './header.module.scss';

function Header({ children, hasBackwardButton = false }) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {hasBackwardButton && (
          <button
            className={styles.back}
            type="button"
            onClick={() => navigate(ROUTES.ourTeam.main)}
          >
            Назад
          </button>
        )}

        {children}
        <button className={styles.exit} type="button">
          Выход
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  hasBackwardButton: PropTypes.bool,
};

Header.defaultProps = {
  hasBackwardButton: false,
};

export default Header;
