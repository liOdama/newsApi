export class NewsService {
    constructor() {
      this.baseUrl = 'https://newsapi.org/v2/top-headlines?' +'country=us&';
      this.apiKey = 'f65dab416a854e25b48426c53f571e77';
    }
    getNews() {
      
      return fetch(this.makeURL())
        .then(searchResponse => searchResponse.json())
        .then((searchData) => {
          if (searchData && searchData.articles && searchData.articles.length) {
            return fetch(this.makeURL())
              .then(newsResponse => newsResponse.json())
              .then(newsData => Promise.resolve(newsData));
          }
          return Promise.resolve([]);
        });
    }
  
    makeURL() {
      const url = new URL(this.baseUrl + this.apiKey);
      return url;
    }
  }
  
  const service = new NewsService();
  export default service;