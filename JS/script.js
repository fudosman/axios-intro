// creating the news on the fly
const createNews = (allNews)=>{
    let li = document.createElement('li');
    li.innerHTML = `
    <div class="news_item">
        <h2><a href="${allNews.url}">${allNews.title}</a></h2>
        <p>${allNews.description}</p>
        <div class="meta">
            <span>${allNews.author}</span>
            <span>${allNews.published_at}</span>
        </div>
    </div>
    `
    return li;
}
// appending the news on the fly, to the dom
const appendToDOM = (allNews)=>{
    const ul = document.querySelector('ul');
    // loop over all the news items
    allNews.map(allNews => {
        ul.appendChild(createNews(allNews));
    });

}

// the get request
const fetch_news = () => {
  axios('http://api.mediastack.com/v1/news?access_key=e8116f27fb0a093d5591741bde202b2d&languages=en&search=abc')
      .then(response => {
          console.log(response);
          const allNews = response.data.data;
          console.log(`get all news`,allNews)
        // append to DOM
        appendToDOM(allNews);
      })
      .catch(error => console.error(error));
};

fetch_news();





