import styles from "./Review.module.scss";
import starIcon from "assets/icons/star.svg";

export const Review = ({ item }) => {
  const renderRate = () => {
    const rate = [];
    for (let i = 1; i <= item.rate; i++) {
      rate.push(<img key={i} src={starIcon} alt="star-icon" />);
    }

    return rate;
  };

  return (
    <div className={styles.review}>
      <div className={styles.reviewAuthor}>
        <img
          className={styles.reviewAuthorAvatar}
          src={item.avatar}
          alt="author avatar"
        />
        <div className={styles.reviewAuthorCenter}>
          <p>{item.author}</p>
          <div className={styles.reviewAuthorRate}>{renderRate()}</div>
        </div>
        <p className={styles.reviewAuthorDate}>{item.date}</p>
      </div>
      <div className={styles.reviewText}>
        <p className={styles.reviewTextPros}>
          <b>Плюсы:</b> {item.pros}
        </p>
        <p className={styles.reviewTextCons}>
          <b>Минусы:</b> {item.cons}
        </p>
      </div>
    </div>
  );
};
