import DocumentList from "../components/DocumentList";
import Editor from "../components/Editor";

const Home = () => {
  return (
    <div className="p-4">
      <Editor />
      <DocumentList />
    </div>
  );
};

export default Home;
