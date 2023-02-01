import React from "react";

import Paper from "@mui/material/Paper";

import styles from "./Post.module.scss";



const Post = (
    {
        title,
        text,
        createdAt,
        viewsCount,
        id
    }
) => {

    console.log("id ====", id)
    return (
        <Paper classes={{ root: styles.root }}>
            {/*<img src={imageUrl} alt={title}/>*/}
            <h2>{title}</h2>
            <p>{text}</p>
            <span>опубликовано {createdAt}</span>
            <p>просмотров {viewsCount}</p>
            {/*<span>{user.fullName}</span>*/}
            {/*<div>{children}</div>*/}
            {/*<ul>*/}
            {/*    <li>tag1</li>*/}
            {/*    <li>tag2</li>*/}
            {/*    <li>tag3</li>*/}
            {/*</ul>*/}
            {/*<span>views </span>*/}
            {/*<span>com</span>*/}
        </Paper>
    )
}

export default Post