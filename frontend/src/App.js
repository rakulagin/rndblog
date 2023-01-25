import Header from "./components/Header/Header";

import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

import {Container} from "@mui/material";



function App() {
    return (
        <>
            <Header/>
            <Container maxWidth={"xl"}>
                {/*<Login/>*/}
                <Registration/>
            </Container>
        </>
    );
}

export default App;
