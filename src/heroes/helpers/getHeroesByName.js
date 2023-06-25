import { heroes } from "../data/heroes";

 
 
 export const getHeroesByName = (name = '') => {
    
    name = name.toLowerCase().trim(); //trim:borrar espacios al inicio y final de la palabra
    
    if (name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );


 }