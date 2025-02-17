const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true, //bezkinechno
    slidesPerView: 2,
    spaceBetween: 50,
    centeredSlides: true,
    breakpoints: {
       
      
        // when window width is >= 480px
        400: {
            slidesPerView: 1.3,
            
          },

        900: {
          slidesPerView: 1.5,
          
        },
        // when window width is >= 640px
       1200: {
          slidesPerView: 2,
        
        }
      },
    // If we need pagination
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button.prev',
      prevEl: '.swiper-button.next',
    },
  
  });