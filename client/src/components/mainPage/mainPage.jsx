import React from 'react';
import { connect } from 'react-redux';
import Card from '../searchCards/searchCard';
import Pagination from '../pagination/pagination';
import Styles from './mainPage.module.css';
import Filters from '../filters/filters';
import Sorting from '../sorting/sorting';


function MainPage({ results, activeFilters, activeSort }) {
     //DEFINING PAGINATION

    const [currentPage, setCurrentPage] = React.useState(1);
    const [resultsPerPage] = React.useState(3);
 
    //ARRAY FOR FILTERED RESULT 
    let filtered = []

    //CHECK IF SORT 
    if (activeSort.alphabetical !== ''){
        console.log('entro');
        if(activeSort.alphabetical === 'az'){
            results.sort(function(a, b) {
                return a.name.localeCompare(b.name);
             });
        }
        if(activeSort.alphabetical === 'za'){
            results.sort(function(a, b) {
                return b.name.localeCompare(a.name);
             });
        }
    }
   else if (activeSort.weight !== ''){
       if(activeSort.weight === 'increasing'){
        results.sort(function(a, b) {
            return a.weight.imperial.localeCompare(b.weight.imperial);
         });
       }
       if(activeSort.weight === 'descending'){
        results.sort(function(a, b) {
            return b.weight.imperial.localeCompare(a.weight.imperial);
         });
       }
   }

   


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //FILTERS SET UP 
    for (let i = 0; i < results.length; i++) {
        

        if (activeFilters.temperament && activeFilters.breed) {
            if (activeFilters.breed === 'Created by me' && results[i].temperament.includes(activeFilters.temperament) && results[i].hasOwnProperty('cbm')) {
                filtered.push(results[i])
            }
            if (activeFilters.breed === 'Existent' && results[i].temperament.includes(activeFilters.temperament) && !results[i].hasOwnProperty('cbm')) {
                filtered.push(results[i])
            }
            
        }
        else if (activeFilters.temperament) {

            if (results[i].temperament.includes(activeFilters.temperament)) {
                filtered.push(results[i])
            }
        }
        else if (activeFilters.breed === 'Created by me' && results[i].hasOwnProperty('cbm') && !filtered.includes(results[i])) {
            filtered.push(results[i]);
        }
        else if (activeFilters.breed === 'Existent' && !results[i].hasOwnProperty('cbm') && !filtered.includes(results[i])) {
            filtered.push(results[i]);
        }


    }

    


    // Get current result or filtered result 
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResult = filtered.length>0 ? filtered.slice(indexOfFirstResult, indexOfLastResult) : results.slice(indexOfFirstResult, indexOfLastResult);
<<<<<<< HEAD
    console.log(indexOfFirstResult)
    console.log (indexOfLastResult)
=======
   
>>>>>>> 2c69234076faf681c9731bbeb8be2a7814842ee5
    return (
        <div className={Styles.mainDiv}>
            <div>
                <Sorting></Sorting>
                <Filters></Filters>
                <Card res={currentResult}></Card>
                <Pagination resultsPerPage={resultsPerPage} totalResults={filtered.length || results.length} paginate={paginate}></Pagination>
            </div>
        </div>

    )
}


const mapStateToProps = state => ({
    results: state.resultsbyName,
    activeFilters: state.activeFilters,
    activeSort: state.activeSort
})


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

