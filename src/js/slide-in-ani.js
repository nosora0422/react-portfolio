const myAnimation = document.querySelectorAll('.box-animation');

const aniObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
        }
    })
},
   {
    threshold: 0.5
   });

  for (let i = 0; i < myAnimation.length; i++) {
    const elements = myAnimation[i];
    aniObserver.observe(elements);
  } 
