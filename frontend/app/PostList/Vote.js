
'use client'
import {UpvoteIcon} from './Upvote'
import {DownvoteIcon} from './Downvote'
import {useAuth} from '../context/AuthContext'
import {useState} from 'react'
const style = {
    votes:"py-1 text-xs font-bold text-white",
    wrapper:'flex flex-col items-center'
}
const Vote =({upvotes,downvotes,id})=>{
    const auth = useAuth()
    const [upvotesstate, setUpvotes] = useState(upvotes);
    const [downvotesstate, setDownvotes] = useState(downvotes);
    const handleupvote = async () => {
        const data = await auth.upvote(id);
        if (data) {
            setUpvotes(upvotes + 1);
        }
   
      };
  
      const handledownvote = async () => {
        const data = await auth.downvote(id);
        if (data) {
            setDownvotes(downvotes + 1);
        }
    
      };
    return (
        <div className={style.wrapper}>
            <button onClick={handleupvote}>
                <UpvoteIcon/>
            </button>
            <p className={style.votes}>{upvotesstate - downvotesstate}</p>
            <button onClick={handledownvote}>
                <DownvoteIcon/>
            </button>
        </div>
    )
}

export default Vote