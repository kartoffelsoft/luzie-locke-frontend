import Button from '../../shared/components/Button';
import styles from './New.module.scss';

function New() {


  const onSubmitHandler = async event => {
    event.preventDefault();
  };


  return (
    <>
      <div className={styles.new}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <div className={styles.formGroup}>
            <input type="text" className={styles.formInput} placeholder="Title" id="title" required spellcheck="false" />
            <label htmlFor="title" className={styles.formLabel}>Title</label>
          </div>

          <div className={styles.formGroup}>
            <input type="number" className={styles.formInput} placeholder="Price" id="price" required spellcheck="false" />
            <label htmlFor="price" className={styles.formLabel}>Price</label>
          </div>

          <div className={styles.formGroup}>
            <textarea className={styles.formInput} placeholder="Description" id="description" required rows="7" spellcheck="false" />
            <label htmlFor="description" className={styles.formLabel}>Description</label>
          </div>

          <Button className={styles.button} type="submit">REGISTER</Button>
        </form>
      </div>
    </>
  );
}

export default New;
