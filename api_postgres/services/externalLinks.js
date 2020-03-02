import ExternalLink from '../models/externalLink';

export default {
  getExternalLinks: async () => {
    const ExternalLinks = await ExternalLink.query();

    return ExternalLinks;
  },

  getExternalLinksById: async id => {
    const anime = await ExternalLink.query().findById(id);

    return anime;
  }
};
