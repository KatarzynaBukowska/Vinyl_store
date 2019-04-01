import vinylRecords from '../../assets/data.js';
import {addTapesToStorage} from './vinyl_storage.js';

// alert(JSON.stringify(vinylRecords)); 

const section = document.querySelector('.vinyl_store');

const createDescription = (description) => {
    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    cardDescription.classList.add('vinyl_description');
    return cardDescription;
}
const createTitleElement = (title, artist) => {
    const cardTitleElement = document.createElement('h1');
    cardTitleElement.textContent = `${title} (${artist})`
    return cardTitleElement;
}

const createPoster = (imgUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl);
    image.classList.add('vinyl_poster');
    return image;
    
}

const createFavoriteButton = (onClickFn) => {
    const button = document.createElement('button');
    button.textContent = 'like';
    button.classList.add('like_button');
    button.onclick = onClickFn;
    return button;
}

const addToStorage = (title, id) => {
        addTapesToStorage(id);
    
}



const vinylCardElements = vinylRecords.map(vinylTape => {
    const vinylWrapper = document.createElement('div');
    vinylWrapper.textContent = vinylTape.title;
    vinylWrapper.classList.add('vinyl_wrapper');

    vinylWrapper.appendChild(createTitleElement(vinylTape.title, vinylTape.artist))
    vinylWrapper.appendChild(createPoster(vinylTape.cover));
    vinylWrapper.appendChild(createDescription(vinylTape.description));

    vinylWrapper.appendChild(createFavoriteButton (
        () => addToStorage(vinylTape.title, vinylTape.id)
    ));
    return vinylWrapper;
});

vinylCardElements.forEach(element => section.appendChild(element));
