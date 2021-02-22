
export function searchDogByName(name){
    
    return  function(dispatch){
       
        return fetch(`http://localhost:3001/dogs?name=${name}`)
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
    console.log(id)
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs/${id}`)
        .then(r=>r.json())
        .then(data => dispatch({type:'GET_DETAIL', payload: data}))
    }
}

export function getRandom(){
    return function(dispatch){
        return fetch('http://localhost:3001/dogs')
        .then(r=>r.json())
        .then(data => dispatch({type:'GET_RANDOM', payload: data}))
    }
}

export function getTemperaments(){
    return function (dispatch){
        fetch('http://localhost:3001/temperaments')
        .then(r => r.json())
        .then( data => dispatch({type:'GET_TEMPS', payload: data}))
      
    }
}