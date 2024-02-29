import Image from "next/image";
import { useAuth } from "../context/AuthContext";


function ChatItem({ content, role }) {
    const auth = useAuth();
    return role === "assistant" ? (
      <div className="flex items-center p-2 bg-[#004d5612] my-2 gap-2">
        <div className="shrink-0 bg-white rounded-full p-1">
          <Image src={"/chat/openai.png"} alt="AI" width={30} height={30} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xl break-words">{content}</p>
        </div>
      </div>
    ) : (
      <div className="flex items-center p-2 bg-[#004d56] gap-2">
        <div className="shrink-0 w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-2xl">
          {auth?.user?.name[0]}
          
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xl break-words">{content}</p>
        </div>
      </div>
    );
  }
  
  export default ChatItem;
  