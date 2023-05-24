import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useSelector } from "react-redux";

function App() {
  const [data, setData] = useState();
  const { helpText } = useSelector((state) => state.markdown);
  return (
    <div className="container">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="row mt-1">
        <button onClick={() => setData(helpText)}>help</button>
      </div>
      <div className="row g-3 mt-1">
        <div className="col-6 ">
          <div className="p-3 bg-dark">
            <textarea
              className="w-100"
              cols={7}
              rows={25}
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-6 ">
          <div className="p-3 bg-light">
            <ReactMarkdown children={data} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
