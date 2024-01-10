import React from 'react'
import './css/blog.css'
import Usefetch from './usefetch'
import Bloglist from './bloglist'

export default function Blog() {

    const { data, ispending, error } = Usefetch('http://localhost:8000/users');

    return (
        <>
            <div className='cover'>
                <main class="contain">
                    <p>Hello! welcome to Digimar</p>
                    <section class="animation">
                        <div class="first"><div>Create Your Own Blog</div></div>
                        <div class="second"><div>View Your Blog</div></div>
                        <div class="third"><div>Delete Your Blog</div></div>
                    </section>
                </main>
                <div >
                    {error && <div>{error}</div>}
                    {ispending && <div>Loading....</div>}
                    <Bloglist blog={data} />
                </div>
            </div>
        </>
    )
}

