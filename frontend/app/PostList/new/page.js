
import PostForm from "../PostForm";

const New = () => {
  return (
    <div className='flex min-h-screen flex-col  text-[#d7dadc]'>
       <div>text</div>
        <main className='mx-auto mt-16 flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6'>
       <div className='w-full lg:w-2/3 mx-auto'>
       <PostForm/>
       </div>
       
     
        </main>
    </div>
  );
}
export default New;