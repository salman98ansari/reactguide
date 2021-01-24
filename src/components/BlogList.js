const BlogList = (props) => {
    const blogs = props.salman;
    const title =props.title;
    return ( 
        <div className="blog-list">
        <h3>{title}</h3>
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;