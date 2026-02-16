import { Link } from "react-router";
import type { FileEntry } from "../types";

function getHeadline(content: string): string | null {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function FileCard({ file }: { file: FileEntry }) {
  const headline = getHeadline(file.content);

  return (
    <Link to={`/file/${file.slug}`} className="no-underline text-inherit">
      <div className="flex flex-col items-center gap-2">
        <div className="group relative w-full aspect-[17/22] bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-0.5">
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
          {headline && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
              <span className="text-white text-sm font-medium text-center leading-snug">
                {headline}
              </span>
            </div>
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
