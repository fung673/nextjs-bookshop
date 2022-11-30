import Book from "../../json/financeBook"
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'
import { useState } from "react"





function BookDetail() {
 const BookArray = Book.Books
 var [sum, setsum] = useState(0)

 function handleAdd() {
  return setsum(sum + 1)
 }

 function handleMinus() {
  if (sum >= 1) setsum(sum - 1)
  return setsum
 }

 const router = useRouter()
 const params = router.query
 /** params is object */
 const param = parseInt(params.productId)
 /** convert object to int */
 for (var i = 0; i < BookArray?.length; i++) {
  if (param === BookArray[i].id) {
   return <div className="BookPage">
    <div className="left">
     <img src={`/${BookArray[i].img}.jpg`} className="Bookimg" width={300} height={350} />
     <div className="bookDescription">Description</div>
    </div>
    <div className="mid">
     <div className="bookname">{BookArray[i].name}</div>
     <div className="bookInfo">
      <div >作者: <div className="spacing">{BookArray[i].author}</div></div>
      <div >出版社: <div className="spacing">{BookArray[i].publishingHouse}</div></div>
      <div >出版日期:<div className="spacing">{BookArray[i].publishingDate}</div></div>
      <div> 現價: HK{BookArray[i].price}.00</div>
     </div>
     <div className="inline">數量
      <div className="addAmount">
       <span className="minus" onClick={handleMinus}> - </span>
       <span className="num"> {sum} </span>
       <span className="plus" onClick={handleAdd}> + </span>
      </div>
     </div>
     <button className="addToCart"> 加入購物車</button>
    </div>
    <div className="right"></div >
   </div >
  }
 }

}
export default BookDetail