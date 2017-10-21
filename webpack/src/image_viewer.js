import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/image_viewer.css';
window.onload = function(){
    const smallImage = document.createElement('img');
    smallImage.src = small;
    document.body.appendChild(smallImage);    
}

export default() => {
    const bigImage = document.createElement('img');
    bigImage.src = big;
    document.body.appendChild(bigImage);
}
