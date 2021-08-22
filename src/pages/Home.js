import { HotItems } from '../components/item';

import AppleAppStoreImage from '../assets/images/apple-app-store.svg';
import GoogleAppStoreImage from '../assets/images/google-app-store.svg';
import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <section className={`flex-row ${styles.briefSection}`}>
        <div className={styles.briefTextContainer}>
          <h2 className="heading-secondary">Create your shop now</h2>
          <p className="paragraph">
            Sell items you don't use and help to build local eco-friendly
            market.
          </p>

          <h2 className="heading-secondary">Get items from neibours</h2>
          <p className="paragraph">
            Reusing and recycling can help you, your community, and the
            environment by saving money, energy, and natural resources.
          </p>
        </div>
        <div className={styles.briefImageContainer}>
          <img
            className={`${styles.briefImageElement}`}
            src="https://via.placeholder.com/200"
            alt=""
          />
        </div>
      </section>

      <section className={styles.downloadSection}>
        <div className="u-center-text">
          <h2 className="heading-secondary">Garage Sale Mobile App Download</h2>
        </div>
        <div className={styles.downloadButtonContainer}>
          <img
            className={styles.downloadButtonElement}
            src={GoogleAppStoreImage}
            alt=""
          />
          <img
            className={styles.downloadButton}
            src={AppleAppStoreImage}
            alt=""
          />
        </div>
      </section>
      <section className={styles.hotSection}>
        <div className="u-center-text">
          <h2 className="heading-secondary">Hot items</h2>
        </div>
        <div className={styles.hotList}>
          <HotItems />
        </div>
        <div className="u-center-text">SHOW MORE</div>
      </section>
      {/* <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div class="flex-row">
          <div class="flex-col-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p class="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p class="paragraph">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>

            <a href="#" class="btn-text">Learn more &rarr;</a>
            
          </div>

          <div class="flex-col-of-2">
            <div class="composition">
              <img src="img/nat-1-large.jpg" alt="" class="composition__photo composition__photo--p1">
              <img src="img/nat-2-large.jpg" alt="" class="composition__photo composition__photo--p2">
              <img src="img/nat-3-large.jpg" alt="" class="composition__photo composition__photo--p3">
            </div>>
          </div>
        </div>
      </section>   */}
    </>
  );
}

export default Home;
