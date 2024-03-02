import Post from "./Post";



const style = {
  wrapper:"space-y-2.5"
}
const Feed = ({posts}) => {
  return (
    <div className={style.wrapper}>
    {posts ? posts.map((post,id)=>{ return <Post title={post.title ? post.title: "No title"}
     id={post._id ? post._id: "No id"}
      author={post.name}
      district={post.district}
      key={id} upvotes={post.upvotes ? post.upvotes:0} downvotes={post.downvotes? post.downvotes: 0}
      content={post.scam}/>}) :<div>No posts create one</div>}
   
    </div>
  );
}
export default Feed;