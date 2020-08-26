var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/Vinicioscastro')
        xhr.send(null)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('error na requisição')
                }
            }
        }

    })
}
minhaPromise()

// ou apague tudo que está em cima e use isso:
// axios.get("https://api.github.com/users/Vinicioscastro")

.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})