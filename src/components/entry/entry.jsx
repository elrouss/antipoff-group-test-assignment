import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoading } from '../../services/features/user/selectors';
import styles from './entry.module.scss';

function Entry({ children, nav, heading, buttonText, isValid, onSubmit }) {
  const onLoad = useSelector(isLoading);

  return (
    <main>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <form noValidate onSubmit={onSubmit}>
          <div className={styles.inputs}>{children}</div>
          <button
            className={styles.button}
            type="submit"
            disabled={!isValid || onLoad}
          >
            {onLoad ? 'Подождите...' : buttonText}
          </button>
        </form>
        <div className={styles.nav}>{nav}</div>
      </div>
    </main>
  );
}

Entry.propTypes = {
  children: PropTypes.node.isRequired,
  nav: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Entry;
