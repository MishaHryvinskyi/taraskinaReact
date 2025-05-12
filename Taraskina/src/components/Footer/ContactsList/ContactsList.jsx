import { FaPhone } from "react-icons/fa";
import { ListContactContainer } from "./ContactsList.syuled";

const ContactsList = () => {
    return (
        <ListContactContainer>
            <li>
                <a href="tel:380683391302"><FaPhone/>380683391302</a>
            </li>
            <li>
                <a href="mailto:ketrintaraskina@gmail.com">ketrintaraskina@gmail.com</a>
            </li>
        </ListContactContainer>
    )
}

export default ContactsList;