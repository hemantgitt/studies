//server side data fetching using serversideprops 


export async function getServerSideProps(context){
    const respose = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await respose.json()

    return { props : {post} }
}


function fetchPost({post}){
    return (

        <div>
            
            <h1>{post.title}</h1>
            <p>{post.body}</p>

        </div>
    )
}

export default fetchPost;