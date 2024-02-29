
import Image from 'next/image'
const style = {
    profilePic:"h-4 w-4 rounded-full",
    wrapper:"flex items-center space-x-1 text-xs text-[#818384]",
    profilePicContainer:"flex items-center space-x-1",
    tag:"cursor-pointer text-xs font-semibold text-[#d7dadc] hover:underline",
    postedBy:"flex items-center space-x-1"
}

const Info = ({author,district})=>{
    return(
        <div className={style.wrapper}>
            <div className={style.profilePicContainer}>
           <Image className={style.profilePic} src="/programmer.png" alt='user profile' width={4} height={4}/>
           </div>
           <div className={style.tag}>
           {district}
           </div>
           <div>*</div>
        <div className={style.postedBy}>
        <span>Posted by {author}</span>
           {/* <span>*</span>
           <span>Jun 15</span> */}
        </div>
        </div>
    )
}

export default Info