import React from 'react'
import "./Amzbook.css"

const Amzbook = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
        </section>
    )
}

const Images = "https://images-na.ssl-images-amazon.com/images/I/71tqt4VL%2BdS._AC_UL200_SR200,200_.jpg";
const Title = "It Ends with Us: A Novel";
const Author = "Colleen Hoover"

const Book = () => {
    return (
    <article className="book"> 
        <img src= {Images} />
        <h1> {Title.toUpperCase()} </h1>
        <h3> {Author} </h3>
    </article>
    )
}


export default Amzbook;
