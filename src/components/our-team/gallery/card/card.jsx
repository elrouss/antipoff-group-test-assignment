import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addCard,
  removeCard,
} from '../../../../services/features/selected-team-members/slice';
import getSelectedTeamMember from '../../../../services/features/selected-team-members/selectors';
import styles from './card.module.scss';

function Card({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCards = useSelector(getSelectedTeamMember).selectedTeamMembers;

  const openCardDetails = (evt) => {
    if (evt.type === 'click' || evt?.key === 'Enter') {
      navigate(`members/${user.id}`);
    }
  };

  const handleLike = (evt) => {
    evt.stopPropagation();

    const isSelected = !!selectedCards.find((card) => card.id === user.id);

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
            aria-label="Добавить/убрать лайк"
            onClick={handleLike}
          />
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
