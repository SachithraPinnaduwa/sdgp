import Link from 'next/link'


const style = {
  wrapper: `flex items-center mx-auto space-x-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`,
  redirectContainer: `flex flex-1 w-full`,
  redirectButton: `w-full cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`,
  iconsContainer: `flex items-center space-x-1 px-1`,
  icon: `h-9 w-9 cursor-pointer rounded stroke-[1.5px] p-1.5 text-gray-400 hover:bg-[#343536]`,
}

const CreatePost = () => {
  return (
    <div className={style.wrapper}>
      {/* <CreatePostIcon /> */}

      <div className={style.redirectContainer}>
        <Link legacyBehavior href={`/PostList/new`}>
         <a className={style.redirectButton}>
          Create Post
          </a> 
        </Link>
      </div>

     
    </div>
  )
}

export default CreatePost
