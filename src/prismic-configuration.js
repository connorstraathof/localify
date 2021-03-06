export default {

    apiEndpoint: 'https://blog93.cdn.prismic.io/api/v2',
  
    // -- Access token if the Master is not open
    // accessToken: 'xxxxxx',
  
    // OAuth
    // clientId: 'xxxxxx',
    // clientSecret: 'xxxxxx',
  
    // -- Links resolution rules
    // This function will be used to generate links to Prismic.io documents
    // As your project grows, you should update this function according to your routes
    linkResolver(doc) {
      if (doc.type === 'post') return `/cafes/${doc.uid}`;
      if (doc.type === 'grocery_post') return `/grocery/${doc.uid}`;
      if (doc.type === 'shop_post') return `/shops/${doc.uid}`;
      if (doc.type === 'food_post') return `/food/${doc.uid}`;
      if (doc.type === 'drinks_post') return `/drinks/${doc.uid}`;
      if (doc.type === 'artist_post') return `/artists/${doc.uid}`;
      return '/';
    },

  };