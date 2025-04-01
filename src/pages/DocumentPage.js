import { useParams } from "react-router-dom";

const DocumentPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Editing Document {id}</h1>
    </div>
  );
};

export default DocumentPage;
