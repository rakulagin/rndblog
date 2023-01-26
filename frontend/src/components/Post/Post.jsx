import React from "react";

import Paper from "@mui/material/Paper";

import styles from "./Post.module.scss";



const Post = (
    {
        id,
        title,
        imageUrl,
        user,
        createdAt,
        viewsCount,
        commentsCount,
        tags,
        isFullPost,
        children
    }
) => {
    return (
        <Paper classes={{ root: styles.root }}>
            <img src={imageUrl} alt={title}/>
            <h2>{title}</h2>
            <span>опубликовано {createdAt}</span>
            <span>{user.fullName}</span>
            <div>{children}</div>
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

export default Post