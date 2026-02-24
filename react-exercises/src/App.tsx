import './App.css'
import Accueil from "./Pages/Accueil.tsx";
import Layout from "./Pages/Layout.tsx";
import PostList from "./Pages/PostList.tsx";
import NotFound from "./Pages/NotFound.tsx";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
  )
}

export default App
