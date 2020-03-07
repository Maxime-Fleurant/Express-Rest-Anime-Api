import lodash from 'lodash';
import Theme from '../models/theme';

export default {
  getThemes: async () => {
    const themes = await Theme.query();

    return themes;
  },

  getThemeById: async id => {
    const theme = await Theme.query().findById(id);

    return theme;
  },

  getThemeTags: async id => {
    const tags = await Theme.relatedQuery('tags').for(id);

    return tags;
  },

  getThemeAnimes: async id => {
    const themesGraph = await Theme.query()
      .findById(id)
      .withGraphFetched('tags.animes');

    const animes = lodash.uniqBy(lodash.flattenDeep(themesGraph.tags.map(el => el.animes)), 'id');

    return animes;
  }
};
