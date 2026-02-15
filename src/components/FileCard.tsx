import { Link } from "react-router";
import type { FileEntry } from "../types";

function FileCard({ file }: { file: FileEntry }) {
  return (
    <Link to={`/file/${file.slug}`} className="no-underline text-inherit">
      <div className="flex flex-col items-center gap-2">
        <div className="w-full aspect-[17/22] bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-0.5">
          {file.thumbnail ? (
            <img
              src={file.thumbnail}
              alt={file.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="p-3 text-xs leading-snug text-gray-400 break-words truncate">
              {file.content.slice(0, 40).trim()}
            </p>
          )}
        </div>
        <span className="text-sm text-gray-500 text-center break-all">
          {file.name}
        </span>
      </div>
    </Link>
  );
}

export default FileCard;
