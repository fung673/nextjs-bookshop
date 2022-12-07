import Link from 'next/link'
import { useRouter } from 'next/router'
import Book from '../../json/artBook'
import React, { useContext } from 'react'
import { CartContext } from "../../components/CartContext"




export default function Art() {
  const BookArray = Book.Books
  const { cartItems, setCartItems } = useContext(CartContext)

  return <div className='bookContainer'>{
    BookArray.map((book) => {
      return (
        <div className="bookDisplay">
          <Link href={'/Art/' + book.id}><img src={`/${book.img}.jpg`} width={300} height={350} className="bookImage" /></Link>
          <Link href={'/Art/' + book.id}> <div className='bookTitle'>{book.name}</div></Link>
          <div className='bookAuthor'>{book.author}</div>
          <div className='bookPrice'>現價: HK${book.price}.00</div>
        </div>)
    })

  }</div>
}

