import React from "react"

import styles from "./Header.module.scss"

import {Container} from "@mui/material";
import {Button, ButtonGroup} from "@mui/material";

const Header = () => {
    const isAuth = false

    return (
        <div className={styles.root}>
            <div className={styles.navBar}>
                <Container maxWidth={"xl"}>
                    <div className={styles.wrp}>
                        <div>
                            <Button href="/" size="large" color="secondary" variant="text">HOME /</Button>
                        </div>
                        <div>
                            <ButtonGroup>
                                {isAuth ? (
                                    <>
                                        <Button href="/" variant="outlined" color="secondary">Написать статью</Button>
                                        <Button href="/" variant="contained" color="primary">Выйти</Button>
                                    </>
                                ) : (
                                    <>
                                        <Button href="/" variant="contained" color="primary">Войти</Button>
                                        <Button href="/" variant="outlined" color="secondary">Создать аккаунт</Button>
                                    </>
                                )}
                            </ButtonGroup>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={styles.banner}>
                <Container className={styles.height} maxWidth={"xl"}>
                    <div className={styles.titleWrp}>
                        <h1 className={styles.title}>my blog</h1>
                        <h2 className={styles.subTitle}>Lorem ipsum dolor sit amet.</h2>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header