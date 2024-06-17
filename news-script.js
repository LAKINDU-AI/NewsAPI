// Wait for the DOM to be fully loaded before executing the loadNews function
document.addEventListener('DOMContentLoaded', loadNews);

function loadNews() {
    // Fetch news articles related to 'London rental prices' from the news API
    fetch('https://newsapi.org/v2/everything?q=London%20rental%20prices&apiKey=d3ffb326ace740b09784c506f22771c2')
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            const newsContainer = document.getElementById('news-container'); // Get the container to display the news
            newsContainer.innerHTML = ''; // Clear any existing content in the container

            // Iterate through each article in the response data
            data.articles.forEach(article => {
                const newsArticle = document.createElement('div'); // Create a div element for each article
                newsArticle.classList.add('news-article'); // Add a CSS class for styling

                const title = document.createElement('h2'); // Create an h2 element for the article title
                title.textContent = article.title; // Set the title text
                newsArticle.appendChild(title); // Append the title to the news article div

                const description = document.createElement('p'); // Create a paragraph for the article description
                description.textContent = article.description; // Set the description text
                newsArticle.appendChild(description); // Append the description to the news article div

                const link = document.createElement('a'); // Create a link element for the article URL
                link.href = article.url; // Set the URL for the article
                link.textContent = 'Read more'; // Set the link text
                link.target = '_blank'; // Open the link in a new tab
                newsArticle.appendChild(link); // Append the link to the news article div

                newsContainer.appendChild(newsArticle); // Append the news article div to the container
            });
        })
        .catch(error => console.error('Error fetching the news:', error)); // Log any errors to the console
}
