import styles from './Footer.module.css' 

const  Footer = () => {
    return (
        <footer>
            <p>Follow us</p>
            <a href='https://www.facebook.com/timefortakeaway' title='facebook'><i className="fa-brands fa-facebook"></i></a>
            <a href='https://www.instagram.com/takeawaycom_bg'><i className="fa-brands fa-instagram"></i></a>
            <a href='https://twitter.com/TakeawaycomBG'><i className="fa-brands fa-twitter"></i></a>
            <a href='https://www.youtube.com/channel/UCM1QOg3YfCmfszGXvwErHPw'><i className="fa-brands fa-youtube"></i></a>
        </footer>
    )
}

export default Footer;