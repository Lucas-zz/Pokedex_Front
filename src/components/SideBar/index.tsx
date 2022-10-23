import { Container, Logo, LogoTextContainer, NavButtons, Version } from "./style";
import { Link, useLocation } from 'react-router-dom';
import NavigationButton from "./NavigationButton";

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import AppLogo from '../../assets/voltbras-logo@2x.png'
import Retangle from '../../assets/retangulo-1491.svg';

export default function SideBar() {
    const location = useLocation();

    function isActive(buttonPath: string) {
        return location.pathname === buttonPath;
    }

    return (
        <Container>
            <Logo>
                <img src={AppLogo} alt='Voltbras App logo' />
                <LogoTextContainer>
                    <div>Voltbras App</div>
                    <div>Pokémon Manager</div>
                </LogoTextContainer>
            </Logo>
            <NavButtons>
                <Link to={'/'}>
                    <NavigationButton active={isActive('/')}>
                        <div>
                            <img src={Retangle} alt='background rectangle on select' />
                            <FormatListBulletedIcon />
                        </div>
                        <span>Lista</span>
                    </NavigationButton>
                </Link>
                <Link to={'/achievements'}>
                    <NavigationButton active={isActive('/achievements')}>
                        <div>
                            <img src={Retangle} alt='background rectangle on select' />
                            <EmojiEventsOutlinedIcon />
                        </div>
                        <span>Conquistas</span>
                    </NavigationButton>
                </Link>
                <Link to={'/pokedex'}>
                    <NavigationButton active={isActive('/pokedex')}>
                        <div>
                            <img src={Retangle} alt='background rectangle on select' />
                            <DashboardOutlinedIcon />
                        </div>
                        <span>Pokédex</span>
                    </NavigationButton>
                </Link>
                <Link to={'/help'}>
                    <NavigationButton active={isActive('/help')}>
                        <div>
                            <img src={Retangle} alt='background rectangle on select' />
                            <HelpOutlineOutlinedIcon />
                        </div>
                        <span>Ajuda</span>
                    </NavigationButton>
                </Link>
                <Link to={'/configurations'}>
                    <NavigationButton active={isActive('/configurations')}>
                        <div>
                            <img src={Retangle} alt='background rectangle on select' />
                            <SettingsIcon />
                        </div>
                        <span>Configurações</span>
                    </NavigationButton>
                </Link>
            </NavButtons>
            <Version>Versão 5.12.485</Version>
        </Container>
    );
}