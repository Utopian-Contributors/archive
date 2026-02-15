import { BrowserRouter, Route, Routes } from "react-router";
import FileDetail from "./components/FileDetail";
import FileGrid from "./components/FileGrid";
import type { FileEntry } from "./types";

const markdownFiles = import.meta.glob("/content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const files: FileEntry[] = Object.entries(markdownFiles).map(
  ([path, content]) => {
    const filename = path.split("/").pop()!.toUpperCase().replace(".MD", ".md");
    return {
      slug: filename,
      name: filename,
      content,
    };
  }
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileGrid files={files} />} />
        <Route path="/file/:slug" element={<FileDetail files={files} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
