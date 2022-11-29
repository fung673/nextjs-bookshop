import React from "react"

export default function Card(props) {
 return (
  <div className="card">
   <div className="book-name">
    {props.name}
   </div>
   <p className="book-author"> 作者:{props.author}</p>
  </div>
 )
}