
import PostForm from "../PostForm";

import { IoMdArrowBack } from "react-icons/io";

const New = () => {
  return (
    <div className='flex min-h-screen flex-col  text-[#d7dadc]'>
       
        <main className='mx-auto mt-16 flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6'>
       <div className='w-full lg:w-2/3 mx-auto'>
       <a href="/" className="flex items-start text-black shadow hover:text-white  "><IoMdArrowBack  className='bg-gray-300 hover:bg-zinc-800 rounded-[50%] w-8 h-8'/> </a><br/>
       <PostForm/>
       </div>
       
     
        </main>
    </div>
  );
}
export default New;