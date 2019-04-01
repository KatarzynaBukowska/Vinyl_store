import vinylTape from '../../assets/data.js'

const STORAGE_KEY = "tapes";

export const addTapesToStorage = id => {
const vinylToAdd = vinylTape.find(tape => tape.id = id)
const tapesInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY))
if(tapesInStorage) {
    tapesInStorage.push(vinylToAdd);
    /*zeby przy klikaniu nie dodaly sie duplikaty .. trzeba to zrobic tu jedna linijka kodu */
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tapesInStorage));

} else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([vinylToAdd])); /* stworzenie tablicy poprzez dodanie [ ] */
}
}

export const getTapesFromStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return dataStorage;
    

}

export const removeTapesFromStorage = (id) => {
    const tapesOutFromStorage = getTapesFromStorage();
    const vinylNewArray = tapesOutFromStorage.filter(vinyl => vinyl.id != id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vinylNewArray));

}
/*removeTapesFromStorage(3); - usuwa te pozycje o id = (...) na str w application */