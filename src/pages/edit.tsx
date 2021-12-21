import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IPageProps from "../interfaces/page";
import { EditorState } from "react-draft-wysiwyg";
import IBlog from "../interfaces/blog";

const EditPage: React.FunctionComponent<IPageProps> = props => {
  const params = useParams();
  const blogId = params.id;
  const url = "https://typescript-blog-backend.herokuapp.com/blogs/";


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
    const response = await fetch(url + id);
    const data = await response.json();
    // below required to typecast via "IBlog" interface defined
    let blogData = data as IBlog;
    setTitle(blogData.title);
    setBody(blogData.body);
    setHeadline(blogData.headline);
    
  }
  
  
  return (
    <p>Edit Page</p>
  )
}

export default EditPage;
