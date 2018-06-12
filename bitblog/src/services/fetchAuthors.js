import { authorEndpoint } from "../shared/constants.js"
import { Author } from "../entities/Author.js"


export const fetchSingleAuthor = (id) =>{
    return fetch(authorEndpoint)
        .then(response => {
        return response.json(); 
    }).then((authors) => {
        return singleAuthor(authors)
  })
}

export const fetchAuthors = () =>{
    return fetch(authorEndpoint)
        .then(response => {
        return response.json(); 
    }).then((authors) => {
        return Authors(authors)
  })
}


const singleAuthor = (authors) => authors.map (author => {
    const id = author.id
    const name = author.name
    const username = author.username;
    const email = author.email;
    const phone = author.phone;
    const address = author.address;
    const company = author.company;
    return new Author (id, name,  username, email, phone, address, company);
})

const Authors = (authors) => authors.map (author => {
    const id = author.id
    const name = author.name
    return new Author (id, name);
})

