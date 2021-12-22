import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import IPageProps from "../interfaces/page";
import IBlog from "../interfaces/blog";
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Navigation from "../components/navigation";
import Header from "../components/header";

  const BlogPage: React.FunctionComponent<IPageProps> = props => {
    const params = useParams();
    const blogId = params.id;
    const url = "https://typescript-blog-backend.herokuapp.com/blogs/";
    const navigate = useNavigate();

    // State variables
    const [_id, setId] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
      
      if (blogId) {
        setId(blogId);
      } else {
        // if the blogId hasn't been set, re-route back to home page
        navigate("/");
      }
    }, []);
    
    // Fetch current blog
    const getBlog = async (id: string) => {
      try {
        const response = await fetch(url + id);
        const data = await response.json();
        // below required to typecast via "IBlog" interface defined
        let blogData = data as IBlog;
        setBlog(blogData);
  
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    // Delete current blog
    const deleteBlog = async () => {
      setIsDeleting(true);
      try {
        const response = await fetch(url + _id, {
          method: "delete"
        });
      } catch (error) {
        setIsDeleting(false);
        console.log(error);
      } finally {
        navigate("/");
        // setLoading(false);
      }
    }
    
    if (blog) {
      return (
        <Container fluid={true} className="p-0">
          <Navigation />
          <Modal isOpen={modalIsOpened}>
            <ModalHeader>
              Delete
            </ModalHeader>
            <ModalBody>
              {isDeleting ? <h1>Loading...</h1> : <h1>{`Confirm deletion of "${blog.title}"?`}</h1>}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={deleteBlog}>DELETE</Button>
              <Button color="secondary" onClick={() => setModalIsOpened(false)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Header
            headline={blog.headline}
            title={blog.title}
          >
            <p className="text-white">
              Posted: {new Date(blog.createdAt).toLocaleString()}
              {/* {blog.createdAt !== blog.updatedAt ? <br />"Updated at:" + new Date(blog.updatedAt).toLocaleString()} */}
            </p>
          </Header>
        </Container>
      )
    } else {
      return <h1>Loading...</h1>
    }
    
  }

export default BlogPage;
