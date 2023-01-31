import React, {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from "../../redux/slices/posts";


const Home = () => {
    const dispatch = useDispatch()
    const {posts, tags} = useSelector(state => state.posts)

    const isPostLoaded = posts.status === 'loaded'

    console.log("posts.items", posts.items)
    console.log("isPostLoaded", isPostLoaded)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <>
        {!isPostLoaded ? <h1>loading home page</h1> : (
            posts.items.map((obj, index) => (
                <p key={index}>{obj.title}</p>
            ))
        )}
        </>
    )
}

export default Home