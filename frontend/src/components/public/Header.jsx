import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
import TimeDisplay from './../shared/TimeDisplay';
import { FaRocket } from "react-icons/fa";  

const Header = () => {
    const { theme } = useTheme();

    const logoMap = {
        default: "/LOGO.png",
        "theme-2": "/Logo2.png",
        "theme-3": "/Logo3.png",
    };

    const adminEmail = "yourdynamicemail@gmail.com"; // later: fetch from admin panel
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}`;

    const handleEmailClick = () => {
        window.open(gmailLink, "_blank");
    };

    return (
        <header className="container header shadow">
            <img
                src={logoMap[theme] || logoMap.default}
                style={{ width: "140px" }}
                alt="Logo"
            />
            <div>
                <TimeDisplay />
            </div>
            <div className="header-right">
                <Button
                    type='press'
                    size='medium'
                    variant='primary'
                    onClick={handleEmailClick}
                >
                    <FaRocket /> Let's Connect
                </Button>
            </div>
        </header>
    );
};

export default Header;
