import '../styles/image_viewer.css';
window.onload = function(){
    const image = document.createElement('img');
    image.src = 'http://lorempixel.com/400/400';
    document.body.appendChild(image);
}
