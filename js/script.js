const images = document.querySelectorAll('img');
const options = {
    root: null,
    rootMargine: '0px',
    threshold: 0.1
};

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
    });
};

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
});