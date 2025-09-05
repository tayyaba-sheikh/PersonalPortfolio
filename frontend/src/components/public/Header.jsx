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

    const handleEmailClick = () => window.open(gmailLink, "_blank");

    return (
        <header className="header container flex items-center justify-between shadow p-3">
            <img
                src={logoMap[theme] || logoMap.default}
                className='img-md md:img-sm'
                alt="Logo"
            />
            <div>
                <TimeDisplay />
            </div>
            <div className="flex items-center">
                <Button
                    styleType='press'
                    size='medium'
                    variant='primary'
                    onClick={handleEmailClick}
                >
                    <FaRocket title='lets connect' /> <span className="sm:hidden md:inline">Let's Connect</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
