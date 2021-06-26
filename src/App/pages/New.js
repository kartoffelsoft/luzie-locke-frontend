import styles from './New.module.scss';

function New() {
  return (
    <>
      <div className={styles.new}>
        <form action="#" className={styles.form}>
          <div className={styles.formGroup}>
            <input type="text" className={styles.formInput} placeholder="Title" id="title" required />
            <label htmlFor="title" className={styles.formLabel}>Title</label>
          </div>

          <div className={styles.formGroup}>
            <input type="text" className={styles.formInput} placeholder="Price" id="price" required />
            <label htmlFor="price" className={styles.formLabel}>Price</label>
          </div>

          <div className={styles.formGroup}>
            <textarea className={styles.formInput} placeholder="Description" id="description" required />
            <label htmlFor="description" className={styles.formLabel}>Description</label>
          </div>
        </form>

      </div>
    </>
  );
}

export default New;
