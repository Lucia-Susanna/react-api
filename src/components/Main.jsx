import axios from "axios"
import { useState, useEffect } from "react"

const Main = () => {

  const apiUrl = 'http://localhost:3000'
  const [postsList, setPostsList] = useState([])

  const fetchPosts = () => {

    axios.get(`${apiUrl}/posts`)
      .then(res => {
        // console.log(res.data);
        setPostsList(res.data)
      })
      .catch(error => {
        console.error(error)
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log(postsList);


  return (
    <main>
      <div className="bg-success-subtle">
        <div className="container py-5">
          <h1 className="text-center">
            Ricette salvate
          </h1>
          {postsList.map(post => (
            <div className="card my-4">
              <div className="p-3 m-3 d-lg-flex align-items-center">
                <img className="col-12 col-lg-6 col-xl-4 me-lg-3" src="https://picsum.photos/400/400" alt={post.title} />
                <div className="col-12 col-lg-6 col-xl-8">
                  <h3 className="my-3">
                    {post.title}
                  </h3>
                  <div>
                    <h5>Descrizione:</h5>
                    <p>
                      {post.content}
                    </p>
                  </div>
                  <div>
                    <h5>Tags:</h5>
                    <p>
                      {post.tags.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

    </main>
  )
}

export default Main
