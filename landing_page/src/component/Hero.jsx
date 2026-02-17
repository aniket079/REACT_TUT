import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Build Modern Web Apps Faster</h1>
        <p>
          Create stunning web experiences with clean design,
          powerful components, and modern architecture.
        </p>
        <div className={styles.actions}>
          <button className={styles.primary}>Start Free</button>
          <button className={styles.secondary}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
