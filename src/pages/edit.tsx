import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/navigation";
import Header from "../components/header";
import IPageProps from "../interfaces/page";
import IBlog from "../interfaces/blog";
// for pretty WYSIWYG styling
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const EditPage: React.FunctionComponent<IPageProps> = props => {
  const params = useParams();
  const blogId = params.id;
  const url = "https://typescript-blog-backend.herokuapp.com/blogs/";
  const navigate = useNavigate();

  // State variables
  const [_id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");

  // React Draft WYSIWYG docs: https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
  // initialize state for form changes in WYSIWYG below
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const [saving, setSaving] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    
    if (blogId) {
      setId(blogId);
      getBlog(blogId)
    } else {
      setLoading(false);
    }
  }, []);

  // note: per TypeScript, ALL parameters must be typecasted for functions
  const getBlog = async (id: string) => {
    try {
      const response = await fetch(url + id);
      const data = await response.json();
      // below required to typecast via "IBlog" interface defined
      let blogData = data as IBlog;
      setTitle(blogData.title);
      setBody(blogData.body);
      setHeadline(blogData.headline);

      // See "editor state" within docs: https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
      const bodyBlock = htmlToDraft(blogData.body);
      const contentState = ContentState.createFromBlockArray(bodyBlock.contentBlocks);
      const _editorState = EditorState.createWithContent(contentState);
      setEditorState(_editorState);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Creating a new blog post
  const createBlog = async () => {
    setSaving(true);
    try {
      await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, headline, body })
      })
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  }
  
  // Editing a blog post
  const editBlog = async (id: string) => {
    setSaving(true);
    try {
      fetch(url + id, {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, headline, body })
      })
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  }

  // Form onSubmit is handled in Reactstrap the same way as Bootstrap, so there's no need to create a separate handleSubmit function or handleChange within React
  // see docs: https://getbootstrap.com/docs/5.1/forms/overview/
  if (loading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <Container fluid={true} className="p-0">
        <Navigation />
        <Header
          headline=""
          title={_id !== "" ? "Edit" : "Create"}
        />
        <Container className="mt-5 mb-5">
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={title}
                id="title"
                placeholder="Once upon a line..."
                onChange={event => setTitle(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="headline">Headline</Label>
              <Input
                type="text"
                name="headline"
                value={headline}
                id="headline"
                placeholder="Extra extra!"
                onChange={event => setHeadline(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Body</Label>
              <Editor
                editorState={editorState}
                wrapperClassName="card"
                editorClassName="card-body"
                onEditorStateChange={newState => {
                  setEditorState(newState);
                  setBody(draftToHtml(convertToRaw(newState.getCurrentContent())));
                }}
                toolbar={{
                  options: ["inline", "blockType", "fontSize", "list", "textAlign", "history", "embedded", "emoji", "image"],
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true }
                }}
              />
            </FormGroup>
            <FormGroup>
              <Button
                outline={true}
                onClick={() => {
                  if (_id !== "") {
                    editBlog(_id);
                  } else {
                    createBlog();
                  }
                }}
              >{_id !== "" ? "Update Blog" : "Create Blog"}</Button>
              <Button className="ml-3" onClick={() => {navigate(`/blogs/${_id}`)}}>Cancel</Button>
            </FormGroup>
          </Form>
        </Container>
      </Container>
    )
  }
  
}

export default EditPage;
