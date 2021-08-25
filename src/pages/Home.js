import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BriefItemList } from '../components/item';
import Footer from '../components/Footer';
import { DownloadModal } from '../components/modal';

import AppleAppStoreImage from '../assets/images/apple-app-store.svg';
import GoogleAppStoreImage from '../assets/images/google-app-store.svg';
import IntroImage from '../assets/images/intro-1.png';

import styles from './Home.module.scss';

function Home() {
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <>
      <DownloadModal
        show={downloadModal}
        onClear={() => setDownloadModal(false)}
      />
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

          <div className={styles.briefLearnMore}>
            <Link to="/about" className="btn-text">
              Learn more &rarr;
            </Link>
          </div>
        </div>
        <div className={styles.briefImageContainer}>
          <img
            className={`${styles.briefImageElement}`}
            src={IntroImage}
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
            onClick={() => setDownloadModal(true)}
          />
          <img
            className={styles.downloadButtonElement}
            src={AppleAppStoreImage}
            alt=""
            onClick={() => setDownloadModal(true)}
          />
        </div>
      </section>

      <section className={styles.itemSection}>
        <div className={styles.itemTitle}>
          <h2 className="heading-secondary">Hot items</h2>
          <Link to="/items" className="btn-text">
            More &rarr;
          </Link>
        </div>
        <div>
          <BriefItemList api="/hot" />
        </div>
      </section>

      <section className={styles.itemSection}>
        <div className={styles.itemTitle}>
          <h2 className="heading-secondary">New items</h2>
          <Link to="/items" className="btn-text">
            More &rarr;
          </Link>
        </div>
        <div>
          <BriefItemList api="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
