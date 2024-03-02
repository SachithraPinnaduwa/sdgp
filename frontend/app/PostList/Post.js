
'use client'
import Vote from "./Vote";
import Actions from "./Actions";
import Info from "./Info";
import { useContext } from "react";
// import { RedditContext } from "../../context/RedditContext";
import { useRouter } from "next/navigation";
const style ={
    post:'flex flex-col space-y-1 cursor-pointer',
    wrapper:'flex space-x-3 rounded bg-[#1a1a1b] p-2 border border-[#343536]',
    postTitle:'text-lg font-medium text-[#d7dadc] ',
    postContent:"text-sm font-light text-[#d7dadc]/80"
}

const Post = ({id,title,author,upvotes,downvotes,content,district}) => {
  const router = useRouter();
//   const {setSelectedPosts} = useContext(RedditContext)
//   const navigateToPost = () =>{
//     setSelectedPosts({id,title,author,upvotes,downvotes,content})
//     router.push(`/post/${id}`)
//   }
  return (
   <div className={style.wrapper}>
    <Vote upvotes={upvotes} downvotes={downvotes} id={id}/>
     <div className={style.post} 
    //  onClick={navigateToPost}
     >
      <Info author={author} district={district}/>
    <h1 className={style.postTitle}>{title}</h1>
    <p className={style.postContent}>{content}
    </p>
    {/* <Actions/> */}
    </div>
   </div>
  )
};

export default Post;
