import styles from './ProfilePicture.module.scss';

const ProfilePicture = props => {
  return (
    <div className={`
      ${styles.container} 
      ${props.className} 
      ${props.small ? styles.small : ''}
    `}>
      <img className={styles.img} src={props.src} alt={props.alt} />
    </div>
  );
};

export default ProfilePicture;
