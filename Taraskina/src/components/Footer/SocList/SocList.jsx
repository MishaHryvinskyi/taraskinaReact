import { 
    FaFacebookF, 
    FaInstagram, 
    FaTelegramPlane,
    FaLinkedinIn,
} from "react-icons/fa";

import { SocialList, SocialLink } from "./SocList.styled";

const SocList = () => {
    return (
        <SocialList>
            <li>
                <SocialLink 
                    href="https://instagram.com/ketrin_taraskina?igshid=MzRlODBiNWFlZA==" 
                    aria-label="Посилання на інстаграм"
                    target="_blank" 
                    rel="noreferrer noopener" 
                >
                    <FaInstagram />
                </SocialLink>
            </li>
            <li>
                <SocialLink 
                    href="https://www.facebook.com/KetrinTaraskina" 
                    aria-label="Посилання на фейсбук" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    <FaFacebookF/>
                </SocialLink>
            </li>
            <li>
                <SocialLink 
                    href="" 
                    aria-label="Посилання на телеграм" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    <FaTelegramPlane />
                </SocialLink>
            </li>
            <li>
                <SocialLink 
                    href="https://www.linkedin.com/in/%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-%D1%82%D0%B0%D1%80%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-%D0%B3%D1%80%D0%B8%D0%B2%D1%96%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-99ba50274/" 
                    aria-label="Посилання на лінкедин" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    <FaLinkedinIn/>
                </SocialLink>
            </li>
        </SocialList>
    )
}

export default SocList;