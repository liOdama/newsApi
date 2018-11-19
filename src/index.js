//import style from './styles/index.css';
import service from './services/newsService.js'
import createDom from './createElement.js'
window.onload = function(){
 
  document.querySelector('.getRequest').addEventListener('click', sendRequest);

  function sendRequest() {

    let getN = new service();
    let dataNews = getN.getNews();

    let showNews = new createDom();
    showNews.createElement('div').setAttr({class : 'newsContainer'}).setFragment(null);
    dataNews.forEach( function(element){
      
      showNews.createElement('article').setAttr({class : 'articleContainer'}).setFragment('.newsContainer')
      showNews.createElement('a').setAttr({class : 'newsLink', src : `${element.url}`}).setFragment('.news-container');
      showNews.createElement('div').setAttr({class: 'imageNews'}).setFragment('.newsLink');
      showNews.createElement('img').setAttr({src: `${element.urlToImage}`}).setFragment('.imageNews');
      showNews.createElement('div').setAttr({class: 'content'}).setFragment('.articleContainer');
      showNews.createElement(p).setText(`${element.content}`).setFragment('.content');

  });
  }
}
