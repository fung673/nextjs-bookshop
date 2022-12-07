import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Book from './../json/artBook'
import Book2 from './../json/kidBook'
import Book3 from './../json/finBook'
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Home() {
  const BookArray = Book.Books
  const BookArray2 = Book2.Books
  const BookArray3 = Book3.Books
  return (
    <div className={styles.container}>
      <Head>
        <title>NewBookShop</title>
        <meta name="description" content="BookShop Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.titleLine}><h2 className={styles.title}>今日推介</h2></div>
        <div className={styles.bookContainer}>
          <div className={styles.bookDisplay}>
            <Link href={'/Art/' + BookArray[0].id}><img src={`/${BookArray[0].img}.jpg`} width={300} height={350} className="bookImage" /></Link>
            <Link href={'/Art/' + BookArray[0].id}> <div className='bookTitle'>{BookArray[0].name}</div></Link>
            <div className='bookAuthor'>{BookArray[0].author}</div>
            <div className='bookPrice'>現價: HK$ {BookArray[0].price}.00</div>
          </div>
          <div className={styles.bookDisplay}>
            <Link href={'/BookForKid/' + BookArray2[2].id}><img src={`/${BookArray2[2].img}.jpg`} width={300} height={350} className="bookImage" /></Link>
            <Link href={'/BookForKid/' + BookArray2[2].id}> <div className='bookTitle'>{BookArray2[2].name}</div></Link>
            <div className='bookAuthor'>{BookArray2[2].author}</div>
            <div className='bookPrice'>現價: HK$ {BookArray2[2].price}.00</div>
          </div>
          <div className={styles.bookDisplay}>
            <Link href={'/Finance/' + BookArray3[2].id}><img src={`/${BookArray3[2].img}.jpg`} width={300} height={350} className="bookImage" /></Link>
            <Link href={'/Finance/' + BookArray3[2].id}> <div className='bookTitle'>{BookArray3[2].name}</div></Link>
            <div className='bookAuthor'>{BookArray3[2].author}</div>
            <div className='bookPrice'>現價: HK$ {BookArray3[2].price}.00</div>
          </div>
        </div>

        <div className={styles.body2}>
          <div className={styles.titleLine}><h2 className={styles.title}>減價特賣</h2></div>
          <div className={styles.bookContainer}>
            <div className="bookDisplay">
              <Link href={'/Art/' + BookArray[5].id}><img src={`/${BookArray[5].img}.jpg`} width={300} height={350} className="bookImage" /></Link>
              <Link href={'/Art/' + BookArray[5].id}> <div className='bookTitle'>{BookArray[5].name}</div></Link>
              <div className='bookAuthor'>{BookArray[5].author}</div>
              <div className='bookPrice'>現價: HK$ {BookArray[5].price}.00</div>
            </div>
            <div className="bookDisplay">
              <Link href={'/BookForKid/' + BookArray2[3].id}><img src={`/${BookArray2[3].img}.jpg`} width={300} height={350} className="bookImage" /></Link>
              <Link href={'/BookForKid/' + BookArray2[3].id}> <div className='bookTitle'>{BookArray2[3].name}</div></Link>
              <div className='bookAuthor'>{BookArray2[3].author}</div>
              <div className='bookPrice'>現價: HK$ {BookArray2[3].price}.00</div>
            </div>
            <div className="bookDisplay">
              <Link href={'/Finance/' + BookArray3[4].id}><img src={`/${BookArray3[4].img}.jpg`} width={300} height={350} className="bookImage" /></Link>
              <Link href={'/Finance/' + BookArray3[4].id}> <div className='bookTitle'>{BookArray3[4].name}</div></Link>
              <div className='bookAuthor'>{BookArray3[4].author}</div>
              <div className='bookPrice'>現價: HK$ {BookArray3[4].price}.00</div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}
