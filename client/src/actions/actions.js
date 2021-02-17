export function searchDogByName(name){
    
    return function(dispatch){
       
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            dispatch({type:'GET_DOG_BY_NAME', payload: data});
        });
    }

} 