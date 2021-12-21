import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

// Convention is to preface interfaces with "I..." in TypeScript
export interface IBlogPreviewProps {
  _id: string;
  title: string;
  headline: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

const BlogPreview: React.FunctionComponent<IBlogPreviewProps> = ({ _id, children, createdAt, updatedAt, headline, title }) => {

  return (
    <Card className="border-0">
      <CardBody className="p-0">
        <Link
          to={`/blogs/${_id}`}
          style={{ textDecoration: "none" }}
          className="text-secondary"
        >
          <h1><strong>{title}</strong></h1>
          <h4>{headline}</h4><br />
        </Link>
          {createdAt !== updatedAt ?
            <p><strong>Updated</strong>: {new Date(updatedAt).toLocaleString()}</p>
          :
            <p><strong>Posted</strong>: {new Date(createdAt).toLocaleString()}</p>
          }
          {children}
      </CardBody>
    </Card>
  )

}


export default BlogPreview;
