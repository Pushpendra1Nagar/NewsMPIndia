let key="ae6ec566b43f40539a917d9c90c5d101";
let cardData = document.querySelector(".cardData");
let searchbtn = document.getElementById("searchbtn");
let inputData = document.getElementById("inputData");
let searchType= document.getElementById("type");


const getData = async(input)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apikey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);
    searchType.innerText="News of "+input;
    inputData.value="";
    
    cardData.innerHTML = "";

    jsonData.articles.forEach(function(article) {
        console.log(article);

        let divs = document.createElement("div");
        divs.classList.add("card");
        cardData.appendChild(divs);
        divs.innerHTML=`
        <img src="${article.urlToImage}" alt="">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            `
        
    });

}
window.addEventListener("load",function(){
    getData("Madhya Pradesh");
})
searchbtn.addEventListener("click",function(){
    let inputText = inputData.value;
    getData(inputText);
})

function navClick(navName){
    getData(navName);
}