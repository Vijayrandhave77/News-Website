
let newscontainer = document.querySelector(".newscontainer");
let form = document.querySelector("#form");
let search = document.querySelector("#search");

let newsapi = async (find) => {
  let url = `https://newsapi.org/v2/everything?q=${find}&from=2024-04-08&sortBy=publishedAt&apiKey=942231c1e6d24800aae61a5dacbbdc02`;
  let response = await fetch(url);
  let data = await response.json();

  let finalnews = data.articles;
  let string = "";
  finalnews.forEach((news) => {

    string =
      string +
      `
    
    <div class="news">
        <img src="${news.urlToImage}"alt="">
        <div class="tittle">${news.title}</div>
        <div class="description">${news.description}</div>
        <div class="link"><a href="${news.url}">Read More</a></div>
    </div>
    
    `;
  });

  newscontainer.innerHTML = string;
};



window.addEventListener('load',()=>{
    newsapi("indore");
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    newsapi(search.value); 

});


