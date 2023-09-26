import styles from './page.module.css';

export default function Registration() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
     <h1><b>Registration Page</b></h1>
     <input type='text' title='User Name' className={styles.maxq_in_text_border}></input>
    </div>
  );
}
