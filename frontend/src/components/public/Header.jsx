import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from './../shared/LanguageSwitcher';
import TimeDisplay from './../shared/TimeDisplay';

const Header = () => {
    const { theme } = useTheme();

    // Map logos according to theme
    const logoMap = {
        default: "/LOGO.png",
        "theme-2": "/Logo2.png",
        "theme-3": "/Logo3.png",
    };

    return (
        <header className="container header shadow">
            <img
                src={logoMap[theme] || logoMap.default}
                style={{ width: "140px" }}
                alt="Logo"
            />
            <div className="header-right">
                <LanguageSwitcher />
                <TimeDisplay />
            </div>
        </header>
    );
};

export default Header;
