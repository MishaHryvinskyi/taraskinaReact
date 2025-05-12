import SocList from "./SocList/SocList";
import ContactsList from "./ContactsList/ContactsList";
import { FooterStyled } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyled>
            <SocList />
            <div>
                <p class="footer__discription">Taraskina &copy; 2023 Всі права захищено</p>
            </div>
            <ContactsList />
        </FooterStyled>
    )
}

export default Footer;