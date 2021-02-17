export function searchDogByName(name){
    
    console.log('Hola')
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then(r => console.log(r))
        .then(data => {
           console.log(data);
            dispatch({type:'GET_DOG_BY_NAME', payload: data});
        });
    }

} 