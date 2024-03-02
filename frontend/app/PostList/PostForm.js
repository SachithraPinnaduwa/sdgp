'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const style = {
  input: 'bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none',
  wrapper: 'flex flex-col space-y-6',
  title: 'border-b border-[#343536] pb-3 text-lg font-medium',
  PostButton: 'bg-gray-200 px-4 py-1.5  font-semibold text-[#1a1a1b] rounded-full',
  PostButtonContainer: 'flex justify-end pt-2',
  select: 'bg-[#1a1a1b] border border-[#343536] text-white text-sm rounded p-2 focus:outline-none',
};

const PostForm = () => {
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const router = useRouter();
  const districts = [
    'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo',
    'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
    'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
    'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya',
    'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya',
  ];

  const createForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
const title = formData.get('title');
      const name = formData.get('name');
      const district = formData.get('district');
      const scam = formData.get('scam');
      
      await auth.scamPost(name, district, scam,title);

      console.log('Form submitted successfully:');
      toast.success('Form submitted successfully.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
    } finally {
      setLoading(false);
      router.push('/PostList')
    }
  };

  return (
    <div className={style.wrapper}>
      {loading && <div>loading</div>}
      <h1 className={style.title}>Create a Post</h1>
      <form className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4" onSubmit={createForm}>
        <input type="text" placeholder="Name" name="name" className={style.input} />
        <input type="text" placeholder="Title" name="title" className={style.input} />
        <select className={style.select} name="district">
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
        <textarea className={style.input} name="scam" id="scam" cols={30} rows={10} placeholder="Text Required" />
        <div className={style.PostButtonContainer}>
          <button className={style.PostButton} type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
