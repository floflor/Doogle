import Logo from '../../images/doogleLogoBlack.png';
import { NavLink } from 'react-router-dom';
import Styles from '../mainPage/mainPage.module.css';
import SearchBar from '../searchBar/searchBar';
import { useHistory } from 'react-router';

export default function NavBar() {
    const history = useHistory();
    return (
        <nav className={Styles.secDiv} >
            <div className={Styles.navBar}>
                <img onClick={()=> history.push('/home')} className={Styles.logo} src={Logo} alt='Doogle logo black' />
                <SearchBar className={Styles.searchBar}></SearchBar>
            </div>
            <div className={Styles.divLinks}>
                <NavLink className={Styles.Links} to='/create'>Create your own</NavLink>
                <NavLink className={Styles.Links} to='/about'>About</NavLink>
            </div>
        </nav>
    )
}