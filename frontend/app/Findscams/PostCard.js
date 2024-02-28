// PostCard.js
const PostCard = () => {
    return (
      <div className="flex bg-white shadow-lg rounded-lg  my-20 max-w-md md:max-w-2xl">
        <div className="flex items-start px-4 py-6">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams</h2>
              <small className="text-sm text-gray-700">22h ago</small>
            </div>
            <p className="text-gray-700">Joined 12 SEP 2012. </p>
            <p className="mt-3 text-gray-700 text-sm">
              Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex mr-2 text-gray-700 text-sm">
                
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PostCard;
  