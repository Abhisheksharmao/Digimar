import { Link } from 'react-router-dom'

const Bloglist = (props) => {
    const data = props.blog;

    return (
        <div>
            <div className='on'>
                {data && data.map((val,index) => {
                    return (
                        <div className='container' key={index}>
                            <Link to={`/blog/${val.id}`} style={{ textDecoration: "none", color: "red" }}>
                                <h2>Written by : {val.author}</h2>
                                <p>Title : {val.title}</p>
                                <button id='read_more'>Read More..</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Bloglist;