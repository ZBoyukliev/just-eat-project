// import Header from './Header/Header'
import Header from './Header/Header';
import Basic from './Basic/Basic';
import Footer from './Footer/Footer';
import styles from './Home.module.css'
import Links from './Links/Links';
import Search from './SearchSection/Search';

const Home = () => {
    return (
        <>
            <Search />
            <Basic />
            <Links />
        </>
    );
};

export default Home;