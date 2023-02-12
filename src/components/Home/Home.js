import styles from './Home.module.css'

const Home = () => {
    return (
        <>
            <section className={styles.findRestaurant}>
                <div className={styles.leftSide}>
                    <div className={styles.search}>
                        <h1>Време е да поръчаш нещо вкусно</h1>
                        <h2>Открий ресторантите в твоя район</h2>
                        <input placeholder='Адрес, 111 Bulgaria Blvd. '></input>
                    </div>
                </div>
                <div className={styles.rightSide}>

                    <div className={styles.image}>
                        <img src='images/doner.png' alt='doner'></img>
                    </div>
                    <svg>
                    </svg>
                </div>
            </section>
            <section className={styles.basicInfo}>
                <div>
                    <h3>
                        Как да поръчаш?
                    </h3>
                    <h2>
                        Толкова е лесно.
                    </h2>
                </div>
                <section className={styles[`how-to-order`]}>
                    <div className={styles[`choise`]}>
                        <img src='/images/location.svg' alt='location'></img>
                        <h3>
                            Посочи твоето местоположение
                        </h3>
                        <p>
                            Попълни адреса си.
                        </p>
                    </div>
                    <div className={styles[`choise`]}>
                        <img src='/images/burger.svg' alt='burger'></img>
                        <h3>
                            Избери ресторант и хапване
                        </h3>
                        <p>
                            Какво ти се хапва?
                            Избери измежду разнообразие от ресторанти и кухни.
                        </p>
                    </div>
                    <div className={styles[`choise`]}>
                        <img src='/images/paid.svg' alt='paid'></img>
                        <h3>
                            Плати и вземи храната си
                        </h3>
                        <p>
                            Използвай най-удобния за теб метод на плащане. Това е. Добър апетит!
                        </p>
                    </div>
                </section>
            </section>
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
            <footer>
                <p>Follow us</p>
                <a href='https://www.facebook.com/timefortakeaway' title='facebook'><i class="fa-brands fa-facebook"></i></a>
                <a href='https://www.instagram.com/takeawaycom_bg'><i class="fa-brands fa-instagram"></i></a>
                <a href='https://twitter.com/TakeawaycomBG'><i class="fa-brands fa-twitter"></i></a>
                <a href='https://www.youtube.com/channel/UCM1QOg3YfCmfszGXvwErHPw'><i class="fa-brands fa-youtube"></i></a>
            </footer>
        </>
    );
};

export default Home;