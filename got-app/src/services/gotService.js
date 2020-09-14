
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    async getCharacter (id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    _transformCharacter(char) {
        return {
            name: char.name ? char.name : 'unknown',
            gender: char.gender ? char.gender : 'unknown',
            born: char.born ? char.born : 'unknown',
            died: char.died ? char.died : 'unknown',
            culture: char.culture ? char.culture : 'unknown'
        }
    }

    _transformHouse(house) {
        return {
            name: house.name ? house.name : 'unknown',
            region: house.region ? house.region : 'unknown',
            words: house.words ? house.words : 'unknown',
            titles: house.titles ? house.titles : 'unknown',
            overlord: house.overlord ? house.overlord : 'unknown',
            ancestralWeapons: house.ancestralWeapons ? house.ancestralWeapons : 'unknown'
        }
    }

    _transformBook(book) {
        return {
            name: book.name ? book.name : 'unknown',
            numberOfPages: book.numberOfPages ? book.numberOfPages : 'unknown',
            publisher: book.publisher ? book.publisher : 'unknown',
            released: book.released ? book.released : 'unknown'
        }
    }
}
