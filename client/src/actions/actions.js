
export function searchDogByName(name){
    
    return  function(dispatch){
       
        return fetch(`https://doogle-by-flo.herokuapp.com/dogs?name=${name}`)
        .then(r => r.json())
        .then(async data => {
      
            for(let i = 0 ; i<data.length ; i++){
                if(data[i].reference_image_id){
                await fetch(`https://api.thedogapi.com/v1/images/${data[i].reference_image_id}`)
                .then(r => r.json())
                .then(img =>{
                    data[i].img = img.url
                })}
                else{
                    data[i].img = 'error'
                }   
            }
            
            dispatch({type:'GET_DOG_BY_NAME', payload: data});
        });
    }
} 

export function getDetail(id){
    
    return function(dispatch){
        return fetch(`https://doogle-by-flo.herokuapp.com/dogs/${id}`)
        .then(r=>r.json())
        .then(data => dispatch({type:'GET_DETAIL', payload: data}))
    }
}

export function getRandom(){
    return function(dispatch){
        return fetch('https://doogle-by-flo.herokuapp.com/dogs')
        .then(r=>r.json())
        .then(data => dispatch({type:'GET_RANDOM', payload: data}))
    }
}

export function getTemperaments(){
    return function (dispatch){
        fetch('https://doogle-by-flo.herokuapp.com/temperaments')
        .then(r => r.json())
        .then( data => dispatch({type:'GET_TEMPS', payload: data}))
      
    }
}

export function setFilters(filters){
    return {type:'SET_FILTERS', payload: filters};
}

export function setSort(sort){
    return {type: 'SET_SORT', payload: sort};
}