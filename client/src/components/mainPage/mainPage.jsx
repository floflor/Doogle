import React from 'react';
import { connect } from 'react-redux';
import Card from '../searchCards/searchCard';
import Pagination from '../pagination/pagination';
import Styles from './mainPage.module.css';
import Filters from '../filters/filters';


function MainPage({ results, activeFilters }) {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [resultsPerPage] = React.useState(3);

    // Get current result
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResult = activeFilters[0] ? activeFilters.slice(indexOfFirstResult, indexOfLastResult) : results.slice(indexOfFirstResult, indexOfLastResult);


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

   if(activeFilters[0]){
       console.log('hola')
   }



    return (
        <div className={Styles.mainDiv}>
            <div>
                <Filters></Filters>
                <Card res={currentResult}></Card>
                <Pagination resultsPerPage={resultsPerPage} totalResults={results && results.length} paginate={paginate}></Pagination>
            </div>
        </div>

    )
}


const mapStateToProps = state => ({
    results: state.resultsbyName,
    activeFilters: state.activeFilters
})


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);