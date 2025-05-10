import { Routes, Route, NavLink } from "react-router-dom"
import ArtList from "./components/ArtList/ArtLists"
import { MainContainer } from "./Container.styled"

function App() {
 return (
 <MainContainer>
    <nav>
        <ul>
            <li><NavLink to="/">Домашня</NavLink></li>
            <li><NavLink to="/galery">Галерея</NavLink></li>
            <li><NavLink to="/about">Галерея</NavLink></li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<div>home</div>}/>
        <Route path="/galery" element={<ArtList/>}/>
        <Route path="/about" element={<div>Про мене</div>}/>
    </Routes>
  {/* <ArtList/> */}
 </MainContainer>)
}

export default App
