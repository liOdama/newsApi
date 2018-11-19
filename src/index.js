let Create = require('./createElement.js');

window.onload = function(){
 
  document.querySelector('.getRequest').addEventListener('click', sendRequest);

  sendRequest(){
    // отсылка запроса
  }
  
  let showNews = new Create()
  showNews.createElement('div').setAttr({class : 'newsContainer'}).setFragment(null);
  dataNews.forEach( function(element){
    
    showNews.createElement('article').setAttr({class : 'news-container'}).setFragment('')
    showNews.createElement('a').setAttr({class : 'newsLink', src : `${element.url}`}).setFragment('.news-container');
    showNews.createElement('div').setAttr({class: })
  }
};
