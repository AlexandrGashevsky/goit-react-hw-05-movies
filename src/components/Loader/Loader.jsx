import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.Loader}>
      <ThreeDots 
        color="#00BFFF" 
        height={80} 
        width={80} 
      />
    </div>
  );
}
