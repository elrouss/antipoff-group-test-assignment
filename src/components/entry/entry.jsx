import PropTypes from 'prop-types';
import styles from './entry.module.scss';

function Entry({ children, heading, buttonText, onSubmit }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <form noValidate onSubmit={onSubmit}>
        <div className={styles.inputs}>{children}</div>
        <button className={styles.button} type="submit">
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
  onSubmit: PropTypes.func.isRequired,
};

export default Entry;
