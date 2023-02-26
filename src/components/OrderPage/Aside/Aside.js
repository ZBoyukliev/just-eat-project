import styles from './Aside.module.css';

const Aside = () => {
    return (
        <div className={styles[`main`]}>
            <h4>172 ресторанта</h4>
            <h4>Отворен сега</h4>
            <h4>Безплатна доставка</h4>
            <h4>Минимална сума за поръчка</h4>
                <div >
                    <input id='radio-inp' type={'radio'} value={'Покажи всички'} name={'choice'}></input>
                    <label for='radio-inp'>Покажи всички</label>
                </div>
                <div>
                    <input id='radio-inp' type={'radio'} value={'15,00 лв. или по-малко'} name={'choice'}></input>
                    <label for='radio-inp'>15,00 лв. или по-малко</label>
                </div>
                <div>
                    <input id='radio-inp' type={'radio'} value={'30,00 лв. или по-малко'} name={'choice'}></input>
                    <label for='radio-inp'>30,00 лв. или по-малко</label>
                </div>
            <h4>Оценка на ресторантите</h4>
            <h4>Oферти и отстъпки</h4>
        </div>
    );
};

export default Aside;