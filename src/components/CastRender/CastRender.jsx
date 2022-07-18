import styles from './CastRender.module.css';

export default function CastRender({ cast }) {
  return (
    <ul className={styles.CastItems}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.CastItem}>
          <img
            alt={actor.original_name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            width="100px"
          ></img>
          <h3>{actor.name}</h3>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

