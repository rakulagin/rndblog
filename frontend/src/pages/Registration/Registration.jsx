import React from "react"

import styles from "./Registration.module.scss"

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Registration = () => {
    return (
        <Paper classes={{root: styles.root}}>
            <Typography classes={{root: styles.title}} variant="h4">
                Создание аккаунта
            </Typography>
            <div className={styles.avatar}>
                <Avatar sx={{ width: 100, height: 100 }}/>
            </div>
            <div className={styles.fields}>
                <TextField label="Полное имя" fullWidth/>
                <TextField label="E-mail" fullWidth/>
                <TextField label="Пароль" fullWidth/>
            </div>
            <Button size="large" variant="contained" fullWidth>
                Зарегистрироваться
            </Button>
        </Paper>
    )
}

export default Registration