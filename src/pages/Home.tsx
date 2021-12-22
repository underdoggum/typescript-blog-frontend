import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "../components/header";
import Navigation from "../components/navigation";
import BlogPreview from "../components/BlogPreview";
import IPageProps from "../interfaces/page";
import IBlog from "../interfaces/blog";

 const HomePage: React.FunctionComponent<IPageProps> = props => {

  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const url = "https://typescript-blog-backend.herokuapp.com/blogs/";
  
  useEffect(() => {
    getBlogs();
  }, []);
  
  const getBlogs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    let blogsData = data as IBlog[];

    // Comparison function to sort blogs based on Mongo's updatedAt timestamps
    blogsData.sort((x, y) => y.updatedAt.localeCompare(x.updatedAt));
    setBlogs(blogsData);
  }


  if (blogs) {
    return (
      <Container fluid={true} className="p-0">
        <Navigation />
        <Header
         title="MVP Blog"
         headline="A journey in modern Software Engineering"
        />
        <Container className="mt-5">
          {blogs.length === 0 ? <h1>Loading...</h1> : ""}
          {blogs.map((blog, index) => {
            return (
              <div key={index}>
                <BlogPreview
                  _id={blog._id}
                  title={blog.title}
                  headline={blog.headline}
                  body={blog.body}
                  createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt}
                />
                <hr />
              </div>
            )
          })}
        </Container>
      </Container>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}


export default HomePage;
