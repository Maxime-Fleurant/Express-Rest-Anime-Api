import Review from '../models/review';

export default {
  getReviews: async () => {
    const reviews = await Review.query();

    return reviews;
  },

  getReviewById: async id => {
    const review = await Review.query().findById(id);

    return review;
  }
};
