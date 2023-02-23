import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles[`header`]}>
            <section>
                <div className={styles[`logo`]}>
                    <a href='/'>
                        <img src="images/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className={styles[`navField`]}>
                    <Link to='/login'><span>Вход</span><i className ="fas fa-user-circle" /></Link>
                </div>
            </section>
        </header>
    );
};

export default Header;