import { useNavigate } from 'react-router-dom';

import styles from './go-back.module.css';

const GoBack = ({ locationFrom }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(locationFrom)}
      type="button"
      className={styles.linkBack}
    >
      Go back
    </button>
  );
};
export default GoBack;
