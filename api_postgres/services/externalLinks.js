import ExternalLink from '../models/externalLink';

export default {
  getExternalLinks: async () => {
    const externalLinks = await ExternalLink.query();

    return externalLinks;
  },

  getExternalLinksById: async id => {
    const externalLink = await ExternalLink.query().findById(id);

    return externalLink;
  }
};
