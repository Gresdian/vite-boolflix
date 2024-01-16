import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    APIKey: 'e44b1219774c4dc091a877c75b8cc8d4',
    urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=',
    urlTv: 'https://api.themoviedb.org/3/search/tv?api_key=',
});