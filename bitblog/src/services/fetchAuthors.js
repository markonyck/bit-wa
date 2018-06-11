import { authorEndpoint } from "../shared/constants.js"
import { Author } from "../entities/Author.js"


export const fetchAuthors = () =>{
    return fetch(authorEndpoint)
        .then(response => {
        return response.json(); 
    }).then((authors) => {
        return myAuthor(authors)
  })
}


const myAuthor = (authors) => authors.map (author => {
    const id = author.id
    const name = author.name

    return new Author (id, name);
})