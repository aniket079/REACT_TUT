import styles from "./Features.module.css";

function Features() {
  return (
    <section className={styles.section}>
      <h2>Why Choose Us?</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>⚡ Fast</h3>
          <p>Optimized for performance and scalability.</p>
        </div>
        <div className={styles.card}>
          <h3>🎨 Modern</h3>
          <p>Beautiful UI built with clean architecture.</p>
        </div>
        <div className={styles.card}>
          <h3>🔒 Secure</h3>
          <p>Industry-standard security best practices.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
