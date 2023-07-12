import { useEffect, useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { useGetOurTeamQuery } from '../../../services/features/our-team/api';
import Card from './card/card';
import {
  NUM_CARDS_DESKTOP_INIT,
  NUM_CARDS_TABLET_INIT,
  NUM_CARDS_DESKTOP_ADD,
  NUM_CARDS_TABLET_ADD,
  MEDIA_TABLET,
} from '../../../utils/constants';
import styles from './gallery.module.scss';

function Gallery() {
  const [numVisibleCards, setNumVisibleCards] = useState(0);

  const { data } = useGetOurTeamQuery();
  const windowWidth = useWindowDimensions();

  const isDesktopScreenDevice = windowWidth >= MEDIA_TABLET;
  const isSmallScreenDevice = windowWidth < MEDIA_TABLET;

  useEffect(() => {
    // Initial rendering cards number
    if (
      [NUM_CARDS_DESKTOP_INIT, NUM_CARDS_TABLET_INIT, 0].includes(
        numVisibleCards
      )
    ) {
      setNumVisibleCards(
        isDesktopScreenDevice ? NUM_CARDS_DESKTOP_INIT : NUM_CARDS_TABLET_INIT
      );
    }

    // Here we check, whether user's width of device has been changed
    // and he clicked on button to see more cards.
    // If, after this action he again has changed
    // the device's width, then we render more cards (if it's needed)
    // on each width to fill the possible void in the gallery
    if (
      isDesktopScreenDevice &&
      numVisibleCards % 3 !== 0 &&
      ![NUM_CARDS_DESKTOP_INIT, NUM_CARDS_TABLET_INIT, 0].includes(
        numVisibleCards
      )
    ) {
      setNumVisibleCards(
        numVisibleCards % 3 === 1 ? numVisibleCards + 3 : numVisibleCards + 1
      );
    }
  }, [windowWidth]);

  const setMoreCards = () => {
    setNumVisibleCards(
      numVisibleCards +
        (isSmallScreenDevice ? NUM_CARDS_TABLET_ADD : NUM_CARDS_DESKTOP_ADD)
    );
  };

  return (
    <>
      <div className={styles.gallery}>
        {data?.data.length &&
          data?.data
            .slice(0, numVisibleCards)
            .map((user) => <Card key={user.id} user={user} />)}
      </div>
      {numVisibleCards < data?.data.length && (
        <button
          className={styles.button}
          type="button"
          onClick={() => setMoreCards()}
        >
          Показать еще
        </button>
      )}
    </>
  );
}

export default Gallery;
