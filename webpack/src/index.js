import sum from './sum';
import './image_viewer';

console.log(sum(5, 10));

const button = document.createElement('button');
button.innerText = 'Click';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        console.log(module);
        module.default();
    })
}
document.body.appendChild(button);
