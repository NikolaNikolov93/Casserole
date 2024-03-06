import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles["container"]}>
      <section className={styles["home-headline"]}>
        <div
          className={`${styles["home-headline-info"]} ${styles["home-flex-item"]}`}
        >
          <h3>Welcome!</h3>
          <h2>This is the best place to find your favourite recepie!</h2>
          <p>Let's start cooking right NOW!</p>
          <a href="/about">About us</a>
        </div>
        <div
          className={`${styles["home-headline-img"]} ${styles["home-flex-item"]}`}
        >
          <img
            src="/images/homePageImages/ella-olsson-KPDbRyFOTnE-unsplash.jpg"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
