import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Title from '../../components/title/Title';
import './Review.css'

const Review = () => {
   // Sample reviews (you can replace these with your data)
   const reviews = [
      {
         id: 1,
         name: 'Mr John',
         rating: 4,
         reviewText: 'I love the products on this website! They have a wide selection, and the quality is always top-notch. Shipping is fast too!',
      },
      {
         id: 2,
         name: 'Mr Smith',
         rating: 5,
         reviewText: 'Excellent customer service! I had a question about my order, and their support team was quick to respond and resolve the issue.',
      },
   ];

   // State for the "Write a Review" modal
   const [showReviewModal, setShowReviewModal] = useState(false);

   const handleShowReviewModal = () => {
      setShowReviewModal(true);
   };

   const handleCloseReviewModal = () => {
      setShowReviewModal(false);
   };

   // State for the new review
   const [newReview, setNewReview] = useState({
      name: '',
      rating: 5,
      reviewText: '',
   });

   // Function to submit a new review (you can implement your backend logic here)
   const submitReview = () => {
      // Add your logic to submit the new review to the backend
      console.log('Submitting review:', newReview);

      // Close the modal after submission
      handleCloseReviewModal();
   };

   return (
      <div className='container rounded ' id='customerReview'>
         {/* <h2>Customer Reviews</h2> */}
         <Title title={"Customer Reviews"} />
         <div id='comment' className="reviews ">
            {reviews.map((review) => (
               <div className="review mx-auto p-2" key={review.id}>
                  <div className="user-info">
                     <p>{review.name}</p>
                  </div>
                  <div className="rating">
                     {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index} className="star-icon">
                           ★
                        </span>
                     ))}
                  </div>
                  <p className="review-text">{review.reviewText}</p>
               </div>
            ))}
         </div>

         <Button variant="primary" onClick={handleShowReviewModal}>
            Write a Review
         </Button>

         {/* "Write a Review" Modal */}
         <Modal show={showReviewModal} onHide={handleCloseReviewModal}>
            <Modal.Header closeButton>
               <Modal.Title>Write a Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group controlId="name">
                     <Form.Label>Your Name:</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={newReview.name}
                        onChange={(e) =>
                           setNewReview({ ...newReview, name: e.target.value })
                        }
                     />
                  </Form.Group>

                  <Form.Group controlId="rating">
                     <Form.Label>Rating:</Form.Label>
                     <Form.Control
                        as="select"
                        value={newReview.rating}
                        onChange={(e) =>
                           setNewReview({ ...newReview, rating: e.target.value })
                        }
                     >
                        <option value="5">★★★★★</option>
                        <option value="4">★★★★☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="1">★☆☆☆☆</option>
                     </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="reviewText">
                     <Form.Label>Your Review:</Form.Label>
                     <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your review here"
                        value={newReview.reviewText}
                        onChange={(e) =>
                           setNewReview({ ...newReview, reviewText: e.target.value })
                        }
                     />
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleCloseReviewModal}>
                  Close
               </Button>
               <Button variant="primary" onClick={submitReview}>
                  Submit Review
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Review;
