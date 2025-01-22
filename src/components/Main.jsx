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
      <div className="container">
        <h3 className="my-3 text-center">
          Ricette salvate
        </h3>
        <div className="d-flex flex-wrap">

          {postsList.map(post => (

            <div className="col-12 col-md-4">
              <div className="card p-3">
                <img src={post.image} alt="" />
                <h5>
                  {post.title}
                </h5>
                <p>
                  {post.content}
                </p>
                <p>
                  {post.tags.join(', ')}
                </p>
              </div>
            </div>


          ))}

        </div>
      </div>

    </main>
  )
}

export default Main
