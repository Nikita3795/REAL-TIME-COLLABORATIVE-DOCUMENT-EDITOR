import { useState } from "react";
import { createDocument } from "../api/documentApi";


const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    await createDocument({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2 className="text-xl">Create Document</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 mt-2">
        Save Document
      </button>
    </div>
  );
};

export default Editor;
