import Header from '../header/header';
import Gallery from './gallery/gallery';
import styles from './our-team.module.scss';

function OurTeam() {
  return (
    <>
      <Header>
        <div className={styles.text}>
          <h1 className={styles.heading}>Наша команда</h1>
          <p className={styles.subheading}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.{' '}
          </p>
        </div>
      </Header>
      <main>
        <div className={styles.wrapper}>
          <Gallery />
        </div>
      </main>
    </>
  );
}

export default OurTeam;
