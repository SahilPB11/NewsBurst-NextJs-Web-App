// components/NewsGrid.js
import React from "react";

const NewsGrid = ({ articles, onLike }) => {
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
              onClick={() => onLike(article.url)}
              className="text-red-500 hover:text-red-700"
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
