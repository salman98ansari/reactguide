import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

      const handleDelete = (id) =>{
          const newBlogs = blogs.filter((blog) => blog.id !== id);
          setBlogs(newBlogs);
      }
      const [name , setName] = useState('mario')

      useEffect(()=>{
          console.log('use effect run');
          console.log(name);
      },[name]);

    return (  
        <div className="home">
            <BlogList
            salman ={blogs}
            title="All Blogs !"
            handleDelete={handleDelete} />
            <BlogList
            salman ={blogs.filter((blog)=> blog.author === 'mario')}
            title="Marios's Blogs !"
            handleDelete={handleDelete} />
            <button onClick={()=> setName('luigi')}>change name</button>
            <p>{name}</p>

        </div>
    );
}
 
export default Home;