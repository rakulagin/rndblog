import React from "react"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";

const Login = () => {
    return (
        <Paper classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h4">
                Вход в аккаунт
            </Typography>
            <div className={styles.fields}>
                <TextField
                    label="E-Mail"
                    // error
                    // helperText="Неверно указана почта"
                    fullWidth
                />
                <TextField label="Пароль" fullWidth />
            </div>

            <Button size="large" variant="contained" fullWidth>
                Войти
            </Button>
        </Paper>
    );
};

export default Login