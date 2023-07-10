import Header from '../header/header';
import Gallery from './gallery/gallery';
import styles from './our-team.module.scss';

function OurTeam() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <Gallery />
        </div>
      </main>
    </>
  );
}

export default OurTeam;
