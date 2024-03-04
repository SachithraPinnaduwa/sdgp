
'use client'
import Vote from "./Vote";
import Actions from "./Actions";
import Info from "./Info";

const style = {
  post: 'flex flex-col space-y-1 cursor-pointer',
  wrapper: 'flex mx-auto space-x-3 max-w-full p-6  border rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700',
  postTitle: 'text-sm font-medium text-[#FFFFFF]',
  postContent: "text-base font-light text-[#d7dadc]/80",
};

const Post = ({id,title,author,upvotes,downvotes,content,district}) => {
 

  return (
   <div className={style.wrapper}>
    <Vote upvotes={upvotes} downvotes={downvotes} id={id}/>
     <div className={style.post} 
    
     >
      <Info author={author} district={district}/>
    <h1 className={style.postTitle}>{title}</h1>
    <p className={style.postContent}>{content}
    </p>
    
    </div>
   </div>
  )
};

export default Post;
