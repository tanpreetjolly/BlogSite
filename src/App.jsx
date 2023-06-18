
import { useState } from "react"
import Layout from "./components/Layout"
import { Route,Routes } from 'react-router-dom'
import './App.css'
import { About } from './pages/About/About'
import Home from './pages/Home/Home'
import NewPost from './pages/NewPost/NewPost'
import PostPage from './pages/PostPage/PostPage'
import Missing from './pages/Missing/Missing'

function App() {

  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "My First Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   },
  //   {
  //     id: 2,
  //     title: "My 2nd Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   },
  //   {
  //     id: 3,
  //     title: "My 3rd Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   },
  //   {
  //     id: 4,
  //     title: "My Fourth Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   }
  // ])
  const [search,setSearch] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<Layout  search={search} setSearch={setSearch}/>}/>
      <Route index element={<Home/>}/>
      <Route path="post">
        <Route index element={<NewPost/>}/>
        <Route path=":id" element={<PostPage/>}/>
      </Route>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<Missing />} />
    </Routes>
  )
}

export default App
