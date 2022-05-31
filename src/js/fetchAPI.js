import axios from "axios";

export default class Gallery{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.amountEl = 0;
    }

    async fetchGallery() {
        const URL = "https://pixabay.com/api/";
        const KEY = "26705827-e07885d0f867327c6c3f35c60";
        try {
        const response = await axios.get(`${URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
        const photos = await response.data;
        this.incrementPage();
        this.amountEl += photos.hits.length;
        return photos;
        } 
        catch (error){
        axios.failure(error.message);
        }
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    resentAmount() {
        this.amountEl = 0;
    }
  
}

