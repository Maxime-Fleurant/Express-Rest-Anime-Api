import Review from '../models/review';

export default {
  getReviews: async () => {
    const reviews = await Review.query();

    return reviews;
  },

  getReviewById: async id => {
    const review = await Review.query().findById(id);

    return review;
  },

  createReview: async postBody => {
    const { animeId, score, body, summary } = postBody;

    const review = await Review.query().insert({ animeId, score, body, summary });

    return review;
  },

  updateReview: async (id, data) => {
    const review = await Review.query().patchAndFetchById(id, data);

    return review;
  }
};
