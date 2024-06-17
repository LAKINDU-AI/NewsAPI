// //document.getElementById('load-news').addEventListener('click', loadNews);

// // Function to load news articles
// function loadNews() {
//     fetch('https://newsapi.org/v2/everything?q=London%20rental%20prices&apiKey=d3ffb326ace740b09784c506f22771c2s')
//         .then(response => response.json()) // Convert the response to JSON
//         .then(data => {
//             const newsContainer = document.getElementById('news-container'); // Get the container to display the news
//             newsContainer.innerHTML = ''; // Clear any existing content
//             data.articles.forEach(article => {
//                 const newsArticle = document.createElement('div'); // Create a div element for each article
//                 newsArticle.classList.add('news-article'); // Add a CSS class for styling

//                 const title = document.createElement('h2'); // Create an h2 element for the article title
//                 title.textContent = article.title; // Set the title text
//                 newsArticle.appendChild(title); // Append the title to the news article div

//                 const description = document.createElement('p'); // Create a paragraph for the article description
//                 description.textContent = article.description; // Set the description text
//                 newsArticle.appendChild(description); // Append the description to the news article div

//                 const link = document.createElement('a'); // Create a link element for the article URL
//                 link.href = article.url; // Set the URL for the article
//                 link.textContent = 'Read more'; // Set the link text
//                 link.target = '_blank'; // Open the link in a new tab
//                 newsArticle.appendChild(link); // Append the link to the news article div

//                 newsContainer.appendChild(newsArticle); // Append the news article div to the container
//             });
//         })
//         .catch(error => console.error('Error fetching the news:', error)); // Log any errors to the console
// }

// // Wait for the DOM to be fully loaded before executing the loadProperties function
// document.addEventListener('DOMContentLoaded', loadProperties);

// // Function to load property images
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

//     const propertiesContainer = document.getElementById('properties-container'); // Get the container to display properties
//     properties.forEach(property => {
//         const propertyDiv = document.createElement('div'); // Create a div for each property
//         propertyDiv.classList.add('property'); // Add a CSS class for styling

//         const img = document.createElement('img'); // Create an img element
//         img.src = property.img; // Set the image source
//         img.alt = property.alt; // Set the image alt text
//         propertyDiv.appendChild(img); // Append the image to the property div

//         propertiesContainer.appendChild(propertyDiv); // Append the property div to the container
//     });
// }

// Add an event listener to the newsletter form for the 'submit' event
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value; // Get the email value from the form
    alert(`Thank you for subscribing with ${email}!`); // Display a thank you message
});

// Add an event listener to the 'load-news' button for the 'click' event
document.getElementById('load-news').addEventListener('click', function() {
    window.location.href = 'news.html'; // Redirect to the news.html page
});

// Wait for the DOM to be fully loaded before executing the loadProperties function
document.addEventListener('DOMContentLoaded', loadProperties);

// Function to load property images
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

    const propertiesContainer = document.getElementById('properties-container'); // Get the container to display properties
    properties.forEach(property => {
        const propertyDiv = document.createElement('div'); // Create a div for each property
        propertyDiv.classList.add('property'); // Add a CSS class for styling

        const img = document.createElement('img'); // Create an img element
        img.src = property.img; // Set the image source
        img.alt = property.alt; // Set the image alt text
        propertyDiv.appendChild(img); // Append the image to the property div

        propertiesContainer.appendChild(propertyDiv); // Append the property div to the container
    });
}

// Add an event listener to the newsletter form for the 'submit' event
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value; // Get the email value from the form
    alert(`Thank you for subscribing with ${email}!`); // Display a thank you message
});
