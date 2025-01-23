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

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/posts/${id}`)
      .then(res => {
        console.log(id);
        setPostsList((prevPosts) => prevPosts.filter(post => post.id !== id))

      })
      .catch(error => {
        console.error(error)
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [postsList])

  // console.log(postsList);


  return (
    <main>
      <div className="bg-success-subtle">
        <div className="container py-5">
          <h1 className="text-center">
            Ricette salvate
          </h1>
          {postsList.map(post => (
            <div
              className="card my-4"
              key={post.id}
            >
              <div className="p-3 m-3 d-lg-flex align-items-center position-relative">
                <button
                  type="button"
                  className="btn btn-outline-danger position-absolute top-0 end-0"
                  onClick={() => handleDelete(post.id)}
                >

                  <i className="fa-solid fa-trash-can"></i>
                </button>
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
          <div className="card p-3">
            <h2>Aggiungi una nuova ricetta</h2>
            <form action="">
              <div className="my-3">
                <label
                  htmlFor="title"
                  className="form-label"
                >
                  Titolo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="image"
                  className="form-label"
                >
                  URL imagine:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="content"
                  className="form-label"
                >
                  Descrizione
                </label>
                <input
                  type="text-area"
                  className="form-control"
                  id="content"
                  name="content"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="tags"
                  className="form-label"
                >
                  Titolo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  name="tags"
                />
              </div>
              <button type="submit" className="btn btn-success my-3 te">Aggiungi ricetta</button>
            </form>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Main
