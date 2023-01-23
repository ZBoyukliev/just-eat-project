import styles from './Home.module.css'

const Home = () => {
    return (
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
                </div>
            </section>
    );
};

export default Home;