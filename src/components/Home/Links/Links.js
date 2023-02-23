import styles from './Links.module.css';

const Links = () => {
    return (
        <section className={styles[`links-to-apps`]}>
            <div className={styles[`left-side`]}>
                <h2>Изтегли приложението</h2>
                <h3>Избери ресторант, поръчай и хапни!</h3>
                <img src='/images/appstore.png' alt='appstor'></img>
                <img src='/images/googleplay.png' alt='googleplay'></img>
                <img src='/images/appgallery.png' alt='appgallery'></img>
            </div>
            <div className={styles[`right-side`]}>
                <img src='/images/mobile.png' alt='mobile'></img>
            </div>
        </section>
    );
};

export default Links;