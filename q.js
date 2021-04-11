fetch("https://meme-api.herokuapp.com/gimme")
.then(function(res){
    return res.json();
})
.then(function(jsonData){
    //console.log(jsonData);
    document.querySelector("img").src = jsonData.url;
    document.querySelector("img").innerText = jsonData.title;

})
.catch(function(err){
    console.log(err);
});