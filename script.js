// //document.getElementById('load-news').addEventListener('click', loadNews);

// function loadNews() {
//     fetch('https://newsapi.org/v2/everything?q=London%20rental%20prices&apiKey=d3ffb326ace740b09784c506f22771c2s')
//         .then(response => response.json())
//         .then(data => {
//             const newsContainer = document.getElementById('news-container');
//             newsContainer.innerHTML = ''; // Clear any existing content
//             data.articles.forEach(article => {
//                 const newsArticle = document.createElement('div');
//                 newsArticle.classList.add('news-article');

//                 const title = document.createElement('h2');
//                 title.textContent = article.title;
//                 newsArticle.appendChild(title);

//                 const description = document.createElement('p');
//                 description.textContent = article.description;
//                 newsArticle.appendChild(description);

//                 const link = document.createElement('a');
//                 link.href = article.url;
//                 link.textContent = 'Read more';
//                 link.target = '_blank';
//                 newsArticle.appendChild(link);

//                 newsContainer.appendChild(newsArticle);
//             });
//         })
//         .catch(error => console.error('Error fetching the news:', error));
// }

// document.addEventListener('DOMContentLoaded', loadProperties);

// function loadProperties() {
//     const properties = [
//         { img: 'property1.jpg', alt: 'Property 1' },
//         { img: 'property2.jpg', alt: 'Property 2' },
//         { img: 'property3.jpg', alt: 'Property 3' },
//         { img: 'property4.jpg', alt: 'Property 4' },
//         { img: 'property5.jpg', alt: 'Property 5' },
//         { img: 'property6.jpg', alt: 'Property 6' },
//         { img: 'property7.jpg', alt: 'Property 7' },
//         { img: 'property8.jpg', alt: 'Property 8' },
//         { img: 'property9.jpg', alt: 'Property 9' },
//         { img: 'property10.jpg', alt: 'Property 10' }
//     ];

//     const propertiesContainer = document.getElementById('properties-container');
//     properties.forEach(property => {
//         const propertyDiv = document.createElement('div');
//         propertyDiv.classList.add('property');

//         const img = document.createElement('img');
//         img.src = property.img;
//         img.alt = property.alt;
//         propertyDiv.appendChild(img);

//         propertiesContainer.appendChild(propertyDiv);
//     });
// }

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with ${email}!`);
});

document.getElementById('load-news').addEventListener('click', function() {
    window.location.href = 'news.html';
});

document.addEventListener('DOMContentLoaded', loadProperties);

function loadProperties() {
    const properties = [
        { img: 'property1.jpg', alt: 'Property 1' },
        { img: 'property2.jpg', alt: 'Property 2' },
        { img: 'property3.jpg', alt: 'Property 3' },
        { img: 'property4.jpg', alt: 'Property 4' },
        { img: 'property5.jpg', alt: 'Property 5' },
        { img: 'property6.jpg', alt: 'Property 6' },
        { img: 'property7.jpg', alt: 'Property 7' },
        { img: 'property8.jpg', alt: 'Property 8' },
        { img: 'property9.jpg', alt: 'Property 9' },
        { img: 'property10.jpg', alt: 'Property 10' }
    ];

    const propertiesContainer = document.getElementById('properties-container');
    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');

        const img = document.createElement('img');
        img.src = property.img;
        img.alt = property.alt;
        propertyDiv.appendChild(img);

        propertiesContainer.appendChild(propertyDiv);
    });
}

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with ${email}!`);
});
