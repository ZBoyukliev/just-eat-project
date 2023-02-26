import Aside from "./Aside/Aside";
import Navigation from "./Navigation/Navigation";
import styles from './OrderPage.module.css';

const OrderPage = () => {
    return (
        <>
            <Navigation />
            <div className={styles[`main`]}>
                <section className={styles[`main-section`]}>
                    <div className={styles[`main-sec-div`]}>
                        <Aside />
                    </div>
                </section>
            </div>
        </>
    );
};

export default OrderPage;