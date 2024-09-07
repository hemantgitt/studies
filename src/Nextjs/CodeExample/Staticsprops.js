export async function getStaticProps(){
    const respose = await fetch("")
    const post = await respose.json()

    return {
        props : {post} , 
        revalidate : 10 // Rebuild the page at most once every 10 seconds
    }
}


function userPost({post}){
    return (

        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default userPost;