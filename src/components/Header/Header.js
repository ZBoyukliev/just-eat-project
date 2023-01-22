import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles[`header`]}>
            <section>
                <div className={styles.logo}> <img src="images/logo.svg" alt="logo" /></div>
                <div></div>
                <div></div>
            </section>
            <nav >
                    <ul>
                        <li><a className={styles.navBtn}>All</a></li>
                        <li><a className={styles.navBtn}>Offers</a></li>
                        <li><a className={styles.navBtn}>Chinese</a></li>
                        <li><a className={styles.navBtn}>Pizza</a></li>
                        <li><a className={styles.navBtn}>Burgers</a></li>
                        <li><a className={styles.navBtn}>Doners</a></li>
                        <li><a className={styles.navBtn}>Sushi</a></li>
                        <li><a className={styles.navBtn}>Mexican</a></li>
                        <li><a className={styles.navBtn}>Vegeterian</a></li>
                        <li><a className={styles.navBtn}>Indian</a></li>

                    </ul>  
            </nav>
        </header>
    );
};

export default Header;