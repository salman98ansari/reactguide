import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending , setisPending] =useState(true);
    const [error, setError] = useState(null);

      useEffect(()=>{
          fetch('http://localhost:8000/blogs')
          .then(res => {
              if(!res.ok){
                  throw Error('Could Not Fetch the Data for that Resource');
              }
              return res.json();
          })
          .then((data) => {
              setBlogs(data);
              setisPending(false);
              setError(null);
          })
          .catch((err)=>{
              setisPending(false);
              setError(err.message);
          })          
      },[]);

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.......</div>}
            { blogs && <BlogList
            salman ={blogs}
            title="All Blogs !"
             />}
        </div>
    );
}
 
export default Home;