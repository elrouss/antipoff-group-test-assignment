import PropTypes from 'prop-types';
import styles from './card.module.scss';

function Card({ user }) {
  return (
    <article className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.person}>
          <img
            className={styles.image}
            src={user.avatar}
            alt="Аватар представителя команды"
          />
          <h2
            className={styles.heading}
          >{`${user.first_name} ${user.last_name}`}</h2>
        </div>
        <button
          className={styles.button}
          type="button"
          aria-label="Добавить/убрать лайк"
        />
      </div>
    </article>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
