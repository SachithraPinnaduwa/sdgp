'use client'
import { useState, useEffect } from 'react';
import Feed from './Feed';
import CreatePost from './CreatePost';
import { useAuth } from '../context/AuthContext';
import Navigation from '../Findscams/navForFindscam';

const style = {
  main: 'mx-auto flex w-full max-w-5xl space-x-6 py-5 px-6',
  content: 'w-full space-y-4 lg:w-full mx-auto',
  searchInput: 'w-full block  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500',
};

const PostList = () => {
  const auth = useAuth();
  const [myPosts, setMyPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await auth.getScamPosts();
      setMyPosts(data);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
    <Navigation/>
    <main className={style.main}>
      <div className={'flex flex-col mt-20 justify-center items-center '}><br/>
        
        </div>
      
        <div className={style.content}>
<div className="sm:w-1/3 w-3/4  items-center ">
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search by post description"
              value={searchQuery}
              onChange={handleSearch}
            />
        </div>
          <CreatePost />
          
          <Feed posts={myPosts.filter(post => post.scam.toLowerCase().includes(searchQuery.toLowerCase()))} />
        </div>
      </main>
      </div>
    
  );
};

export default PostList;
