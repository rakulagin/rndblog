import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";



import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import FullPost from "../src/pages/FullPost/FullPost"



import {Container} from "@mui/material";



function App() {
    return (
        <>
            <Header/>
            <Container maxWidth={"xl"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/post" element={<FullPost/>}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
