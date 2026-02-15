import { useEffect } from "react";
import type { FileEntry } from "../types";
import FileCard from "./FileCard";

function FileGrid({ files }: { files: FileEntry[] }) {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/logo.webp"
          alt="Utopian Contributors"
          className="h-10 rounded-md"
        />
        <h1 className="text-xl font-light text-gray-500">
          Utopian Contributors
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-8">
        {files.map((file) => (
          <FileCard key={file.slug} file={file} />
        ))}
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-4">
          <div className="shadow-sm rounded-md w-fit p-2 pr-6 pb-4 border border-transparent transform hover:shadow-none hover:-translate-y-1 hover:border-gray-300 transition-all duration-300">
            <a
              href="https://tribe.utopian.build"
              target="_blank"
              className="w-fit"
            >
              <img src="/tribe-wordmark.webp" className="h-20" />
              <p className="ml-4 text-gray-500">Everything your app needs.</p>
            </a>
          </div>

          <div className="shadow-sm rounded-md w-fit p-2 pr-6 pb-4 border border-transparent transform hover:shadow-none hover:-translate-y-1 hover:border-gray-300 transition-all duration-300">
            <a
              href="https://turbine.utopian.build"
              target="_blank"
              className="w-fit"
            >
              <img src="/turbine-wordmark.webp" className="h-20" />
              <p className="ml-4 text-gray-500">Faster than the competition.</p>
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-12 pt-6 border-t border-gray-200 flex gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Utopian Contributors LLC</p>
        <a
          href="/terms-of-service.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          Terms of Service
        </a>
        <a
          href="/privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          Privacy Policy
        </a>
        <a href="https://pump.fun/coin/HGTXnhgyast5fJKhMcE4VgyeEVWhYKEsHxpZtpjhrYqA">
          HGTXnhgyast5fJKhMcE4VgyeEVWhYKEsHxpZtpjhrYqA
        </a>
      </footer>
    </div>
  );
}

export default FileGrid;
