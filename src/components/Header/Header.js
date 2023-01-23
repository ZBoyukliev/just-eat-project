import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles[`header`]}>
            <section>
                <div className={styles.logo}>
                    <a href='/'>
                        <img src="images/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className={styles.inputField}>
                    <input placeholder='Адрес, 111 Bulgaria Blvd. '></input>
                </div>
                <div className={styles.navField}>
                    <a href='/register'><i class="fas fa-user-circle fa-3x"></i></a>
                </div>
            </section>
            <nav >
                <ul>
                    <li><a className={styles.navBtn}>Всички</a></li>
                    <li><a className={styles.navBtn}>Оферти</a></li>
                    <li><a className={styles.navBtn}>Китайска</a></li>
                    <li><a className={styles.navBtn}>Пици</a></li>
                    <li><a className={styles.navBtn}>Бургери</a></li>
                    <li><a className={styles.navBtn}>Дюнери</a></li>
                    <li><a className={styles.navBtn}>Суши</a></li>
                    <li><a className={styles.navBtn}>Мексиканска</a></li>
                    <li><a className={styles.navBtn}>Вегетарианска</a></li>
                    <li><a className={styles.navBtn}>Индийска</a></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;