import {getTapesFromStorage, removeTapesFromStorage} from './vinyl_storage.js';

const list = document.querySelector('.library');

const buildLibrary = () => {
    const favoriteTapes = getTapesFromStorage();


    const listItemElements = favoriteTapes.map(tape => { /** map zawsze musi cos zwrocic czyli return .... */
        const listItem = document.createElement('li');
        listItem.classList.add('fav_item');
        const title = document.createElement('p');


        const button = document.createElement('button');
            button.textContent = 'dislike';
            button.classList.add('dislike_button');
            button.onclick = () => {
                removeTapesFromStorage(tape.id);

                while(list.firstChild) {
                    list.removeChild(list.firstChild);
                }

                buildLibrary();
            }
        
    

        title.textContent = tape.title;

        listItem.appendChild(title);
        listItem.appendChild(button);
        return listItem;

    })
    
listItemElements.forEach(item => {
    list.appendChild(item);
    
});
}

buildLibrary();