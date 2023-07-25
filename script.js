const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls =['previous','next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousal{
    constructor(container, items, controls){
        this.carousalContainer = container;
        this.carousalControls = controls;
        this.carousalArray = [...items];
    }
    updateGallery(){
        this.carousalArray.forEach (el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });
        this.carousalArray.slice(0,5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }
    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carousalArray.unshift(this.carousalArray.pop());
        }else{
            this.carousalArray.push(this.carousalArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carousalControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText=control;
        } )
    }

useControls(){
const triggers = [...galleryControlsContainer.childNodes];
triggers.forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
    });
});
}
}
const exampleCarousel = new Carousal(galleryContainer,galleryItems,galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();