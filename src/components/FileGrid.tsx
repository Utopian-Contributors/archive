import FileCard from "./FileCard";
import type { FileEntry } from "../types";

function FileGrid({ files }: { files: FileEntry[] }) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="mb-6 text-xl font-light text-gray-500">Files</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-8">
        {files.map((file) => (
          <FileCard key={file.slug} file={file} />
        ))}
      </div>
    </div>
  );
}

export default FileGrid;
