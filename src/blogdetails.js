import { useParams } from "react-router";
import Usefetch from "./usefetch";
import { useNavigate } from "react-router-dom"
import './css/blogde.css'
import { useEffect, useState } from "react";
import './css/blogdetails.css'


const Blogdeatils = () => {


  const [disp, setDisp] = useState("");

  const { id } = useParams();
  const { error, ispending } = Usefetch();

  useEffect(() => {
    fetch('http://localhost:8000/users?id=' + id)
      .then((res) => res.json())
      .then(res => {
        setDisp(res);
      })
  }, [id])

  let history = useNavigate();

  const handeldelete = () => {
    fetch('http://localhost:8000/users/' + id, {
      method: 'DELETE'
    }).then(() => {
      history("/")
    })
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {ispending && <div>Loading....</div>}
      {disp && disp.map((val, index) => {
        return (
          <div key={index} className="wrapper">
            <h1>Written by : <span>{val.author}</span></h1>
            <h2>Title : {val.title}</h2>
            <p>{val.body}</p>
          </div>
        )
      })}
      <div className="delt">
        <button id="delete" onClick={handeldelete} >Delete</button>
      </div>

    </div>
  );
}

export default Blogdeatils;