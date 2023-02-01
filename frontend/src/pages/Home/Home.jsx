import React, {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from "../../redux/slices/posts";

import Post from "../../components/Post/Post";

const Home = () => {
    const dispatch = useDispatch()
    const {posts, tags} = useSelector(state => state.posts)

    const isPostLoaded = posts.status === 'loaded'

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    console.log(posts.items[0])

    return (
        <>
        {!isPostLoaded ? <h1>loading home page</h1> : (
            posts.items.map((obj, index) => (
                <Post key={index}
                      title={obj.title}
                      text={obj.text}
                      createdAt={obj.createdAt}
                      viewsCount={obj.viewsCount}
                      id={obj._id}
                />
            ))
        )}
        </>
    )
}

export default Home