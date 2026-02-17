import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>MyBrand</div>
      <ul className={styles.links}>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <button className={styles.btn}>Get Started</button>
    </nav>
  );
}

export default Navbar;
