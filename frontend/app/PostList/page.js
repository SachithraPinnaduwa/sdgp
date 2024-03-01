'use client'
import Feed from "./Feed";
import CreatePost from "./CreatePost";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getuserPost } from "../helpers/api-communicator";
import { useAuth } from "../context/AuthContext";

const style = {
    wrapper: `flex min-h-screen flex-col text-white`,
    main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
    content: `w-full space-y-4 lg:w-2/3`,
    infoContainer: `hidden w-1/3 lg:block`,
  }

const PostList = () => {
const auth = useAuth();
    const [myPosts,setMyPosts] = useState([])

    

    useEffect(() => {
        const fetchData = async () => {
          const data = await auth.getScamPosts();
          setMyPosts(data);
        console.log(data,"data");
        };
    
        fetchData();
      }, []);
    
// console.log(myPosts[0]._id,"myPosts");

       
  return (
    <div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <div className={style.wrapper}>
        <h1>Post List</h1>
        <main className={style.main}>
          <div className={style.content}>
            <CreatePost />
            <Feed posts={myPosts}/>
          </div>
          
        </main>
        </div>
     
    </div>
  );
};

export default PostList;