export const select = {
    homeOf: {
      app: '#template-home-page',
    },
    productsOf: {
      app: '#template-products-page',
    },
    aboutUsOf: {
      app: '#template-about-us-page',
    },
    contactUsOf: {
      app: '#template-contact-us-page',
    },
    containerOf: {
      app: '#app',
    },
    nav: {
      links: '.nav_navigation_row a',
    },
  };
  
  export const templates = {
    home: Handlebars.compile(document.querySelector(select.homeOf.app).innerHTML),
    products: Handlebars.compile(document.querySelector(select.productsOf.app).innerHTML),
    aboutUs: Handlebars.compile(document.querySelector(select.aboutUsOf.app).innerHTML),
    contactUs: Handlebars.compile(document.querySelector(select.contactUsOf.app).innerHTML),
  };
  
  export const classNames = {
    active: 'active',
  };