const swiper = new Swiper('#banner-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      enabled: false,
    },
    
    breakpoints: {
      // when window width is >= 992px
      992: {
        navigation: {
          enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },

      }
         
    },

  });



  const typefile = document.querySelectorAll('.custom-file')
  

  typefile.forEach(item =>{
    item.addEventListener ('change', () =>{
      const fileName = item.closest('.control-box').querySelector('.file-name')
      fileName.innerHTML = item.files[0].name;
    })
  });

  
  const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length

  const swiperAdvantages = new Swiper('#advantages', {
    // spaceBetween: 12,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
    breakpoints: {
      992: {
        spaceBetween: 0,
        loop: false,
        slidesPerGroup: advantagesSlideLength,
        simulateTouch: false,
        pagination: {
          enabled: false,
          el: '.swiper-pagination',
        },
        
      }
    }

  });




  const swiperTemplate = document.querySelectorAll('.slider-template') 
  const sliderTemplatePrevArr = document.querySelectorAll('.swiper-button-prev-unique')
  const sliderTemplateNextArr = document.querySelectorAll('.swiper-button-next-unique')

  console.log(sliderTemplatePrevArr);
  sliderTemplatePrevArr.forEach((item, index) => {
   item.classList.add('.swiper-button-prev-unique-' + index)

  })

  sliderTemplateNextArr.forEach((item, index) => {
    item.classList.add('.swiper-button-next-unique-' + index)
 
  })



  swiperTemplate.forEach((item, index) => {

    new Swiper(item, {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
    navigation: {
      enabled: false,
      nextEl: '.swiper-button-next-unique-' + index,
      prevEl: '.swiper-button-prev-unique-' + index,     
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next-unique-' + index,
        prevEl: '.swiper-button-prev-unique-' + index,
          
    },
    pagination: {
      enabled: false,
    },
    
 },

   861: {
       slidesPerView: 2,
       spaceBetween: 30,
       navigation: {
        enabled: false,
        nextEl: '.swiper-button-next-unique-' + index,
        prevEl: '.swiper-button-prev-unique-' + index,
       },

       pagination: {
        enabled: false,
      },
          
    },
  

    1252: {
        slidesPerView: 3,
        spaceBetween: 30, 
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next-unique-' + index,
          prevEl: '.swiper-button-prev-unique-' + index,
            
         },
         pagination: {
          enabled: false,
        },
       
      }
    }
});
})
