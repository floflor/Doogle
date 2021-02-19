export function searchDogByName(name){
    
    return function(dispatch){
       
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then(r => r.json())
        .then(data => {
      
            for(let i = 0 ; i<data.length ; i++){
                if(data[i].reference_image_id){
                fetch(`https://api.thedogapi.com/v1/images/${data[i].reference_image_id}`)
                .then(r => r.json())
                .then(img =>{
                    data[i].img = img.url
                })}
                else{
                    data[i].img = 'No img related to this dog!'
                }   
            }
            
            dispatch({type:'GET_DOG_BY_NAME', payload: data});
        });
    }
} 
