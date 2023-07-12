import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ROUTES, MEDIA_TABLET } from '../../utils/constants';
import { logoutUser } from '../../services/features/user/slice';
import styles from './header.module.scss';

function Header({ children, hasBackwardButton = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {hasBackwardButton && (
          <button
            className={styles.back}
            type="button"
            onClick={() => navigate(ROUTES.ourTeam.main)}
          >
            {windowWidth >= MEDIA_TABLET && 'Назад'}
          </button>
        )}

        {children}
        <button
          className={styles.exit}
          type="button"
          onClick={() => dispatch(logoutUser())}
        >
          {windowWidth >= MEDIA_TABLET && 'Выход'}
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
