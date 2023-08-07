import {Route,Routes} from 'react-router-dom'
import Home from "./Home";
import NewPage from "./NewPage";
import PostPage from "./PostPage";
import Missing from "./Missing";
import MainLayout from './MainLayout';
import React, { useState } from 'react'


const Router = () => {
  const [posts,setPosts] = useState( [
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
// const [search ,setSearch] = useState('');
const  [searchResults, setSearchResults] = useState ([])
  return (
    <Routes> 
<Route>
 <Route path='' element={<MainLayout />} >
    <Route index path='' element={<Home posts={posts}/>}/>
    <Route path='/newpage' element={<NewPage/>}/>
    <Route path='/postpage' element={<PostPage />}/>
    <Route path='*' element={<Missing />}/>
 </Route>


</Route>
    </Routes>
  )
}

export default Router

