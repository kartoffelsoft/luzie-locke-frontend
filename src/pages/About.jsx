import WordCloud from 'react-d3-cloud';
import styles from './About.module.scss';

function About() {
  const data = [
    { text: 'React', value: 35 },
    { text: 'Typescript', value: 10 },
    { text: 'Heroku', value: 15 },
    { text: 'MongoDB', value: 28 },
    { text: 'Redis', value: 20 },
    { text: 'socket.io', value: 20 },
    { text: 'Express', value: 20 },
    { text: 'react-test-library', value: 10 },
    { text: 'Firebase', value: 15 },
    { text: 'SCSS', value: 25 },
    { text: 'NodeJS', value: 30 },
    { text: 'GoogleMap', value: 22 },
    { text: 'OAuth', value: 20 },
    { text: 'JWT', value: 18 },
    { text: 'HTML', value: 14 },
    { text: 'Flutter', value: 24 },
    { text: 'FirebaseFCM', value: 15 },
    { text: 'RESTful', value: 16 },
  ];

  return (
    <div className={styles.container}>
      <section className={`flex-row ${styles.techStackSection}`}>
        <div className={styles.techStackCloud}>
          <WordCloud
            width={300}
            height={300}
            data={data}
            fontSize={(w) => w.value}
            rotate={() => 0}
          />
        </div>
        <div className={styles.techStackDescriptions}>
          <h2 className="heading-secondary">
            Tech stacks used for the service
          </h2>
          <p className="paragraph">
            <li>Find items nearby</li>
            <li>Real time chat</li>
            <li>OAuth Login</li>
            <li>Mobile App support</li>
            <li>Image upload</li>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
