import styles from './Basic.module.css';

const Basic = () => {
    return (
        <section className={styles[`basicInfo`]}>
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
    );
};

export default Basic;