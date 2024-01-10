import React, { useState } from 'react'
import './css/newblog.css'
import { useNavigate } from "react-router-dom"

export default function Newblog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const [ispending, setIspending] = useState(false);

  let history = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    setIspending(true);


    fetch('http://localhost:8000/users', {
      method: 'Post',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log("new blog added");
        setIspending(false);
        history("/");
      })
  }
  return (
    <div className='om'>

      <div >

        <form onSubmit={handelsubmit}>

          <h2 style={{ textAlign: "center" }}>Add New Blog</h2>

          <div className='cont'>

            <input className='inputbox' type="text" id='name' placeholder='+   Enter Name...' required value={author} onChange={(e) => setAuthor(e.target.value)} />

          </div>


          <br />


          <div className='cont'>
            <input className='inputbox' type="text" id='title' placeholder='+   Enter Title...' required value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>


          <br />

          <textarea className='tex' placeholder='+   Enter your story' required name="" id="text_ar" cols="89" rows="12" onChange={(e) => setBody(e.target.value)}></textarea>

          <br />


          <div className='blog_add'>
            {!ispending && <button type='submit' id='blog_add' className='btn'>Add Blog</button>}
            {ispending && <button disabled className='btn' >Adding Blog</button>}
          </div>

        </form>

      </div>

    </div>
  )
}
