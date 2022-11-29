import Book from "../../json/Book"
import { useRouter } from 'next/router'
import Image from 'next/image'

const BookArray = Book.Books

function BookDetail() {
 const router = useRouter()
 const params = router.query
 /** params is object */
 const param = parseInt(params.productId)
 /** convert object to int */
 for (var i = 0; i < BookArray?.length; i++) {
  if (param === BookArray[i].id) {
   return <div className="BookPage">
    <div className="left">
     <Image src={`/${BookArray[i].img}.JPG`} className="Bookimg" width={300} height={300} />
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
     <button className="addToCart">加入購物車</button>
    </div>
    <div className="right"></div >
   </div >
  }
 }

}
export default BookDetail