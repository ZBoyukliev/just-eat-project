import styles from './Search.module.css'

const Search = () => {
    return (
        <section className={styles[`findRestaurant`]}>
            <div className={styles[`leftSide`]}>
                <div className={styles[`search`]}>
                    <h1>Време е да поръчаш нещо вкусно</h1>
                    <h2>Открий ресторантите в твоя район</h2>
                    <div className={styles[`search-btn`]}>
                        <div className={styles[`input`]}>
                            <input placeholder='Адрес, 111 Bulgaria Blvd. '></input>
                        </div>
                        <span className={styles[`search-span`]}>
                            <button className={styles[`btn`]}>Търсене</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles[`rightSide`]}>

                <div className={styles[`image`]}>
                    <img src='images/doner.png' alt='doner'></img>
                </div>
                <svg>
                </svg>
            </div>
        </section>
    )
};

export default Search;