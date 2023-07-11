import PropTypes from 'prop-types';
import styles from './entry.module.scss';

function Entry({
  children,
  heading,
  buttonText,
  isValid,
  isLoading,
  onSubmit,
}) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <form noValidate onSubmit={onSubmit}>
        <div className={styles.inputs}>{children}</div>
        <button
          className={styles.button}
          type="submit"
          disabled={!isValid || isLoading}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

Entry.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Entry;
