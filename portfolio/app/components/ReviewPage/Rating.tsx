import React, { useState } from 'react';
import styles from './Rating.module.css';

const Rating: React.FC = () => {
  const [rating, setRating] = useState(0); // Holds selected rating
  const [hoverRating, setHoverRating] = useState(0); // Handles hover effect
  const [review, setReview] = useState(''); // Captures user review
  const [isSubmitted, setIsSubmitted] = useState(false); // Handles submission state

  // Handle star click
  const handleRatingClick = (rate: number) => {
    setRating(rate);
  };

  // Handle review submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating < 3 && review.trim() === '') {
      alert('Please submit a review for ratings below 3 stars.');
      return;
    }
    setIsSubmitted(true);
    alert(`Thank you for your ${rating}-star rating!`);
  };

  return (
    <div className={styles.RateUs}>
      <h2>Rate Us</h2>
      
      {/* Star Rating Section */}
      <div className={styles.Stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.Star} ${star <= (hoverRating || rating) ? styles.Filled : ''}`}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Conditional Review Input */}
      {rating < 3 && (
        <div className={styles.LowRatingMessage}>
          <p>Please let us know why you're giving a low rating:</p>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Type your review here..."
            className={styles.ReviewInput}
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        className={styles.SubmitButton}
        onClick={handleSubmit}
        disabled={rating === 0} // Disable if no rating is selected
      >
        Submit
      </button>

      {/* Success Message */}
      {isSubmitted && <p className={styles.SuccessMessage}>Thank you for your feedback!</p>}
    </div>
  );
};

export default Rating;
