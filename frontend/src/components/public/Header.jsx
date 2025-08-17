import Logo from './../shared/Logo';
import LanguageSwitcher from './../shared/LanguageSwitcher';
import TimeDisplay from './../shared/TimeDisplay';

const Header = () => {
    return (
        <header className="header shadow">
            <Logo />
            <div className="header-right">
                <LanguageSwitcher />
                <TimeDisplay />
            </div>
        </header>
    );
};

export default Header;
