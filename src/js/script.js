import { select, classNames, templates } from './settings.js';

const app = {
  init: function () {
    const thisApp = this;

    thisApp.getElements();
    thisApp.renderHomePage();
    this.registerProductsPageClickHandler();
    this.registerContactUsPageClickHandler();
    this.registerHomePageClickHandler();
  },
  getElements: function () {
    const thisApp = this;

    thisApp.dom = {};
    thisApp.dom.wrapper = document.querySelector(select.containerOf.app);
  },
  renderHomePage: function () {
    const thisApp = this;

    const generatedHTML = templates.home();
    thisApp.dom.wrapper.innerHTML = generatedHTML;
  },

  registerHomePageClickHandler: function () {
    const thisApp = this;

    const productLink = document.querySelectorAll(select.nav.links)[0];

    productLink.addEventListener('click', function () {
      const generatedHTML = templates.home();
      thisApp.dom.wrapper.innerHTML = generatedHTML;
    });
  },

  registerProductsPageClickHandler: function () {
    const thisApp = this;

    const productLink = document.querySelectorAll(select.nav.links)[1];

    productLink.addEventListener('click', function () {
      const generatedHTML = templates.products();
      thisApp.dom.wrapper.innerHTML = generatedHTML;
    });
  },
 
  registerContactUsPageClickHandler: function () {
    const thisApp = this;

    const productLink = document.querySelectorAll(select.nav.links)[2];

    productLink.addEventListener('click', function () {
      const generatedHTML = templates.contactUs();
      thisApp.dom.wrapper.innerHTML = generatedHTML;
    });
  },
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);
      });
    }
  },
  activatePage: function (pageId) {
    const thisApp = this;

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
};

app.init();