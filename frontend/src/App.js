import Header from "./components/Header/Header";

import Login from "./pages/Login/Login";

import {Container} from "@mui/material";


function App() {
    return (
        <>
            <Header/>
            <Container maxWidth={"xl"}>
                <Login/>
            </Container>
        </>
    );
}

export default App;
