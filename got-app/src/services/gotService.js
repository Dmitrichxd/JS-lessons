import ItemDetails, {Field} from "../components/itemDetails";
import React from "react";

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

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }
    
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    
    getAllHouses = async () =>  {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }
    
    getHouse = async (id) =>  {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: char.name ? char.name : 'unknown',
            gender: char.gender ? char.gender : 'unknown',
            born: char.born ? char.born : 'unknown',
            died: char.died ? char.died : 'unknown',
            culture: char.culture ? char.culture : 'unknown'
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: house.name ? house.name : 'unknown',
            region: house.region ? house.region : 'unknown',
            words: house.words ? house.words : 'unknown',
            titles: house.titles ? house.titles : 'unknown',
            overlord: house.overlord ? house.overlord : 'unknown',
            ancestralWeapons: house.ancestralWeapons ? house.ancestralWeapons : 'unknown'
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name ? book.name : 'unknown',
            numberOfPages: book.numberOfPages ? book.numberOfPages : 'unknown',
            publisher: book.publisher ? book.publisher : 'unknown',
            released: book.released ? book.released : 'unknown'
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
}


