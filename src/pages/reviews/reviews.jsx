/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
const API_KEY = 'ec14b12534cfa5aa544b4a61898160f3';

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const id = useOutletContext();

  useEffect(() => {
    fetchReviews();
    console.log(reviews);
  }, [id]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
      );
      const data = await response.json();
      setReview(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No reviews yet</p>
        </div>
      )}
    </div>
  );
};
export default Reviews;
