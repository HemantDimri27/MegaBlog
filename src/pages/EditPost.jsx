
import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../componants'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost






// import React, {useState, useEffect} from 'react'
// import { Container, PostForm } from '../componants'
// import appwriteService from "../appwrite/confing"
// import { useNavigate, useParams } from 'react-router-dom'

// function EditPost() {
//   const [post, setPosts] = useEffect(null)
//   const {slug} = useParams()
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (slug) {
//       appwriteService.getPost(slug).then((post) => {
//         if (post) {setPosts(post)}
//       })
//     } else {
//       navigate('/')
//     }
//   }, [slug, navigate])

//   return (
//     <div className='py-8'>
//       <Container>
//         <PostForm post={post} />
//       </Container>
//     </div>
//   )
// }

// export default EditPost