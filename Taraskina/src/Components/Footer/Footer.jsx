import { FaPhone } from "react-icons/fa";
import SocList from "./SocList";

import { FooterStyled } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyled>
            <SocList />
            <div>
                <p class="footer__discription">Taraskina &copy; 2023 Всі права захищено</p>
            </div>
            <div>
                <ul>
                    <li>
                         <a href="tel:380683391302"><FaPhone/>380683391302</a>
                    </li>
                    <li>
                        <a href="mailto:ketrintaraskina@gmail.com">ketrintaraskina@gmail.com</a>
                    </li>
                </ul>
            </div>
        </FooterStyled>
    )
}

export default Footer;