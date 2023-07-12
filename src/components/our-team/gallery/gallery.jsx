import { useGetOurTeamQuery } from '../../../services/features/our-team/api';
import Card from './card/card';
import styles from './gallery.module.scss';

function Gallery() {
  const { data } = useGetOurTeamQuery();

  return (
    <>
      <div className={styles.gallery}>
        {data?.data.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      <button className={styles.button} type="button">
        Показать еще
      </button>
    </>
  );
}

export default Gallery;
