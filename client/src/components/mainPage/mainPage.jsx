import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../searchCards/searchCard';
import Pagination from '../pagination/pagination';
import Styles from './mainPage.module.css';
import Filters from '../filters/filters';


function MainPage({ results, activeFilters }) {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [resultsPerPage] = React.useState(3);
    let filtered = []



    
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    if (activeFilters.temperament || activeFilters.breed){
        console.log(activeFilters.temperament)
        for (let i = 0; i < results.length; i++) {
            if(activeFilters.temperament){
                if(results[i].temperament.includes(activeFilters.temperament)){
                    filtered.push(results[i])
                }

                // if(activeFilters.breed && !filtered.includes(results[i])){
                //     if(results[i].temperament.includes(activeFilters.temperament)){
                //         filtered.push(results[i])
                //     }
            }
            
        }
}

// Get current result
const indexOfLastResult = currentPage * resultsPerPage;
const indexOfFirstResult = indexOfLastResult - resultsPerPage;
const currentResult =  filtered[0]? filtered.slice(indexOfFirstResult, indexOfLastResult) : results.slice(indexOfFirstResult, indexOfLastResult);

    return (
        <div className={Styles.mainDiv}>
            <div>
                <Filters></Filters>
                <Card res={currentResult}></Card>
                <Pagination resultsPerPage={resultsPerPage} totalResults={filtered.length || results.length} paginate={paginate}></Pagination>
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