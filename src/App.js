import Newblog from "./Newblog";
import Blog from "./blog";
import Nav from "./nav";
import Blogdetails from "./blogdetails";
import Notfound from "./notfound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div classNameName="App" style={{background:"#e3afbc" , height:"100vh"}} >
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Blog />}>home</Route>
          <Route path="/Newblog" element={<Newblog />}></Route>
          <Route path="/blog/:id" element={<Blogdetails />}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
