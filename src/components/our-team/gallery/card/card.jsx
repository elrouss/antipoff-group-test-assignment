import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addCard,
  removeCard,
} from '../../../../services/features/selected-team-members/slice';
import getSelectedTeamMembers from '../../../../services/features/selected-team-members/selectors';
import styles from './card.module.scss';

function Card({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCards = useSelector(getSelectedTeamMembers).selectedTeamMembers;
  const isSelected = !!selectedCards.find((card) => card.id === user.id);

  const openCardDetails = (evt) => {
    if (evt.type === 'click' || evt?.key === 'Enter') {
      navigate(`members/${user.id}`);
    }
  };

  const handleLike = (evt) => {
    evt.stopPropagation();

    return dispatch(isSelected ? removeCard(user) : addCard(user));
  };

  return (
    <div
      className={styles.content}
      role="button"
      tabIndex={0}
      aria-label="Открыть страницу с подробной информацией о представителе команды"
      onClick={openCardDetails}
      onKeyDown={openCardDetails}
    >
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
            aria-label={isSelected ? 'Убрать лайк' : 'Добавить лайк'}
            onClick={handleLike}
          >
            <svg
              className={(isSelected && styles.like) || ''}
              width="16"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.85 1A3.848 3.848 0 0 0 1 4.845C1 8.691 5.55 12.187 8 13c2.45-.813 7-4.309 7-8.155A3.848 3.848 0 0 0 11.15 1 3.847 3.847 0 0 0 8 2.634 3.844 3.844 0 0 0 4.85 1z"
                stroke="#151317"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </article>
    </div>
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
