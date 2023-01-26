import React from "react";

import Paper from "@mui/material/Paper";

import styles from "./CommentsBlock.module.scss";

const CommentsBlock = () => {
    return (
        <Paper classes={{ root: styles.root }}>
            <img src="" alt=""/>
            <h2>Lorem ipsum dolor.</h2>
            <span>опубликовано 19.12.2022</span>
            <span>автор рома</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut blanditiis delectus hic inventore itaque iusto laborum, maxime necessitatibus obcaecati optio praesentium quos ratione sed ullam unde vel veniam voluptates. Accusamus ad blanditiis delectus, deleniti doloremque dolores doloribus ducimus ea eaque eligendi est fuga illo ipsam ipsum nemo neque nesciunt non nostrum optio quasi recusandae reiciendis, repellendus reprehenderit sequi temporibus vel velit. Aliquid beatae culpa, dicta dolor iusto maxime nam quas, quibusdam sed sequi ullam vel velit vitae? Architecto at cum, delectus eum impedit in, inventore minus natus praesentium quaerat quod temporibus vel veritatis vero voluptatibus? Aliquid doloremque quae sequi.</p>
            <ul>
                <li>tag1</li>
                <li>tag2</li>
                <li>tag3</li>
            </ul>
            <span>views </span>
            <span>com</span>
        </Paper>
    )
}

export default CommentsBlock