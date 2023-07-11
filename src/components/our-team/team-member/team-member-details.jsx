import { useParams } from 'react-router-dom';
import { useGetOurTeamQuery } from '../../../services/features/our-team/api';
import Header from '../../header/header';
import iconPhone from '../../../assets/icons/phone.svg';
import iconEmail from '../../../assets/icons/mail.svg';
import userDescription from '../../../utils/data/user-data';
import styles from './team-member-details.module.scss';

// TODO: Если пользователя с id не существует, отрисовывать соответствующую страницу

function TeamMemberDetails() {
  const { data: users } = useGetOurTeamQuery();
  const { id } = useParams();

  const currentUser = users?.data.find((user) => user.id === Number(id));
  const contacts = [
    {
      _id: 1,
      icon: iconPhone,
      alt: 'Иконка телефонной трубки',
      data: currentUser?.phone || userDescription.default.phone,
      href: `tel:${currentUser?.phone || userDescription.default.phone}`,
    },
    {
      _id: 2,
      icon: iconEmail,
      alt: 'Иконка конверта',
      data: currentUser?.email || userDescription.default.email,
      href: `mailto:${currentUser?.email || userDescription.default.email}`,
    },
  ];

  return (
    <>
      <Header hasBackwardButton>
        <div className={styles.member}>
          <img
            className={styles.avatar}
            src={currentUser?.avatar}
            alt="Аватар представителя команды"
          />
          <div className={styles.info}>
            <h1
              className={styles.heading}
            >{`${currentUser?.first_name} ${currentUser?.last_name}`}</h1>
            <p className={styles.subheading}>
              {currentUser?.job || userDescription.default.job}
            </p>
          </div>
        </div>
      </Header>
      <main>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            {currentUser?.description || userDescription.default.description}
          </p>
          <ul className={styles.contacts}>
            {contacts.map(({ _id, icon, alt, data, href }) => (
              <li key={_id}>
                <a className={styles.contact} href={href}>
                  <img src={icon} alt={alt} />
                  <span>{data}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default TeamMemberDetails;
