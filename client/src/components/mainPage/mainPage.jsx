import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../searchBar/searchBar';
import Card from '../searchCards/searchCard';
import Pagination from '../pagination/pagination';
import Logo from '../../images/doogleLogoBlack.png';
import { NavLink } from 'react-router-dom';
import Styles from './mainPage.module.css';

function MainPage({results}) {
    
    const [currentPage, setCurrentPage] = React.useState(1);
    const [resultsPerPage] = React.useState(3);
  
    // Get current result
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResult = results.slice(indexOfFirstResult, indexOfLastResult);
    

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={Styles.mainDiv}>
            <nav className={Styles.secDiv} >
                <div className={Styles.navBar}>
                <img className={Styles.logo} src={Logo} alt='Doogle logo black' />
                <SearchBar className={Styles.searchBar}></SearchBar>
                </div>
                <div className={Styles.divLinks}>
                <NavLink className={Styles.Links} to='/create'>Create your own</NavLink>
                <NavLink className={Styles.Links} to='/about'>About</NavLink>
                </div>
            </nav>
            <div>
            <Card res={currentResult}></Card>
            <Pagination resultsPerPage={resultsPerPage} totalResults={results.length} paginate={paginate}></Pagination>
            </div>
        </div>

    )
}


const mapStateToProps = state => ({
 results : state.resultsbyName
})


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);