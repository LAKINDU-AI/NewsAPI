document.addEventListener('DOMContentLoaded', loadNews);

function loadNews() {
    fetch('https://newsapi.org/v2/everything?q=London%20rental%20prices&apiKey=d3ffb326ace740b09784c506f22771c2')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Clear any existing content
            data.articles.forEach(article => {
                const newsArticle = document.createElement('div');
                newsArticle.classList.add('news-article');

                const title = document.createElement('h2');
                title.textContent = article.title;
                newsArticle.appendChild(title);

                const description = document.createElement('p');
                description.textContent = article.description;
                newsArticle.appendChild(description);

                const link = document.createElement('a');
                link.href = article.url;
                link.textContent = 'Read more';
                link.target = '_blank';
                newsArticle.appendChild(link);

                newsContainer.appendChild(newsArticle);
            });
        })
        .catch(error => console.error('Error fetching the news:', error));
}
