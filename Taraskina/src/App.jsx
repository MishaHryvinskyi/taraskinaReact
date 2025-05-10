import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery/Gallery"
import OneArt from "./pages/OneArt"
import Layout from "./components/ArtList/Layout/Layout"

function App() {
 return (
   <div style={{ backgroundColor: '#2a2438' }}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path="galery" element={<Gallery/>}/>
                <Route path="galery/:id" element={<OneArt/>}/>
                <Route path="about" element={<About />}/>
            </Route>
        </Routes>
    </div>
 )
}

export default App
