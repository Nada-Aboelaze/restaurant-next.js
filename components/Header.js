import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{ backgroundColor: "rgb(231, 231, 231)" }}
    >
      <div className="container">
        <Link href="/">
          {/* <a className="navbar-brand" href="#" style={{color:'black'}}> */}
          <a className="navbar-brand">
            <Image src="/logo.png" alt="" width="75" height="75" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link active" aria-current="page">
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/menu">
                <a className="nav-link active" aria-current="page">
                  Menu
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/reservation">
                <a className="nav-link active" aria-current="page">
                    Reservation
                </a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link active" aria-current="page">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className={styles.navBar}>
    //   <Link href="/" >
    //     <a className={styles.linkA}> Home</a></Link>
    //   {/* <Link href="/about" className={styles.linkA}>About Us</Link>
    //   <Link href="/menu" className={styles.linkA}>Menu</Link>
    //   <Link href="/reservation"className={styles.linkA}>Reservation</Link>
    //   <Link href="/contact"className={styles.linkA}>Contact Us</Link> */}
    // </nav>
  );
}
export default Header;
