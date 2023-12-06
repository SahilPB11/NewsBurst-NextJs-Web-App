import React, { useState } from "react";

const NewsGrid = ({ articles, onLike }) => {
  console.log(articles);

  // State to track liked articles
  const [likedArticles, setLikedArticles] = useState([]);

  // Function to handle like button click
  const handleLikeClick = (url) => {
    // Check if the article is already liked
    const isLiked = likedArticles.includes(url);

    // Toggle the like status
    if (isLiked) {
      // Unlike: Remove the article from the liked list
      setLikedArticles(likedArticles.filter((likedUrl) => likedUrl !== url));
    } else {
      // Like: Add the article to the liked list
      setLikedArticles([...likedArticles, url]);
    }

    // Call the onLike function with the updated liked status
    onLike(url, !isLiked);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <div key={article.url} className="p-4 border rounded-md">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-500 mb-4">{article.description}</p>
          <div className="flex justify-between items-center">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
            <button
              onClick={() => handleLikeClick(article.url)}
              className={`text-${
                likedArticles.includes(article.url) ? "white" : "red"
              }-500 hover:text-${
                likedArticles.includes(article.url) ? "white" : "red"
              }-700`}
            >
              ❤️ Like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
