import axios from "axios"
import toast from "react-hot-toast"
const axiosInstance = axios.create({
    baseURL: "http://localhost:3100/api/v1",
    withCredentials: true
});
export const loginUser = async (email, password) => {
    
    const res = await axiosInstance.post('/users/login', {email,password})
    if (res.status !== 201) {
        
        toast.error('Login failed')
    }
    const data = await res.data
    return data;
}

export const signupUser = async (name,email, password) => {
    
    const res = await axiosInstance.post('/users/signup', {name,email,password})
    if (res.status !== 201) {
        
        toast.error('Unable to signup user')
    }
    const data = await res.data
    return data;
}

export const checkAuthStatus = async () => {
    const res = await axiosInstance.get('/users/auth-status')
    if (res.status !== 200) {
        throw new Error('Auth status check failed')
    }
    const data = await res.data
    return data;

}

//changed from here

export  const sendChatRequest =  async(message)=>{
    const response = await axiosInstance.post('/chat/new',{message})
    if (response.status != 200) {
        toast.error("Unable to send data")
        
    }
    const data = await response.data;
    return data;
}

export  const getUserChats =  async()=>{
    const response = await axiosInstance.get('/chat/all-chats')
    if (response.status != 200) {
        throw new Error("Unable to send chat");
        
        
    }
    const data = await response.data;
    return data;
}

export  const deleteUserChats =  async()=>{
    const response = await axiosInstance.delete('/chat/delete')
    if (response.status != 200) {
        throw new Error("Unable to delete chats");
        
        
    }
    const data = await response.data;
    return data;
}

export  const logoutUser =  async()=>{
    const response = await axiosInstance.get('/users/logout')
    if (response.status != 200) {
        throw new Error("Unable to logout user");
        
        
    }
    const data = await response.data;
    return data;
}

export  const scamSubmit =  async(name,email,province,scam)=>{
    const response = await axiosInstance.post('/scam',{name,email,province,scam})
    if (response.status != 200) {
        throw new Error("Unable to post scam");
        
    }
    const data = await response.data;
    return data;
}