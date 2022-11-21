const text = document.querySelector('.transition');
const text2 = document.querySelector('.transition2');
const section = document.querySelector('.section');
const hid_section = document.querySelector('.hid-section');

window.addEventListener('scroll', () => {

    /* const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = text.getBoundingClientRect().top;

    //console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        text.classList.add('active')
        text2.classList.add('active')
    }

    if(scrollTop < (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        text.classList.remove('active')
        text2.classList.remove('active')
    } */
    section.classList.remove('active');
    hid_section.classList.add('active');

})