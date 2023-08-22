import React from "react";

const DownloadButton = ({ url, label }) => {
  return (
    <a href={url} download>
      <button className="px-4 py-2 text-white font-medium bg-indigo-600 rounded-md hover:bg-indigo-700 hover:shadow-md transition-all w-full md:w-full lg:w-40">
        {label}
      </button>
    </a>
  );
};

export default DownloadButton;
