import { useState } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router";
import type { FileEntry } from "../types";

function FileDetail({ files }: { files: FileEntry[] }) {
  const { slug } = useParams();
  const file = files.find((f) => f.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!file) {
    return (
      <div className="sticky top-0 backdrop-blur-sm max-w-3xl mx-auto p-8">
        <Link to="/" className="inline-block mb-6 text-gray-500 no-underline text-sm hover:text-black">
          &larr; Back
        </Link>
        <p>File not found.</p>
      </div>
    );
  }

  function handleCopy() {
    navigator.clipboard.writeText(file!.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleDownload() {
    const blob = new Blob([file!.content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file!.name;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="sticky top-0 px-2 py-6 bg-white/95 flex items-center justify-between">
        <Link to="/" className="text-gray-500 no-underline text-sm hover:text-black">
          &larr; Back
        </Link>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Download
          </button>
        </div>
      </div>
      {file.thumbnail && (
        <div className="flex items-end gap-2 mb-6">
          <img
            src={file.thumbnail}
            alt={file.name}
            className="w-12 rounded-xs"
          />
          <h1 className="mt-4 text-2xl font-semibold text-gray-900">{file.name}</h1>
        </div>
      )}
      <article className="prose prose-gray pb-12">
        <Markdown>{file.content}</Markdown>
      </article>
    </div>
  );
}

export default FileDetail;
