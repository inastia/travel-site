import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu();

// browser updates without reload
if (module.hot) {
    module.hot.accept();
}
