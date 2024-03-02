
'use client'
import Vote from "./Vote";
import Actions from "./Actions";
import Info from "./Info";

const style = {
  post: 'flex flex-col space-y-1 cursor-pointer',
  wrapper: 'flex mx-auto space-x-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
  postTitle: 'text-lg font-medium text-[#FFFFFF]',
  postContent: "text-sm font-light text-[#d7dadc]/80",
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
