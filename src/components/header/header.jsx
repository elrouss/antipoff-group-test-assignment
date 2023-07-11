import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ROUTES } from '../../utils/constants';
import { logoutUser } from '../../services/features/user/slice';
import styles from './header.module.scss';

function Header({ children, hasBackwardButton = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <button
          className={styles.exit}
          type="button"
          onClick={() => dispatch(logoutUser())}
        >
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
