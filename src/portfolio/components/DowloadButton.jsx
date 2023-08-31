
const DownloadButton = ({ url, label }) => {
  return (
    <div className="lg:flex justify-end">
      <a href={url} download="Cv - Levi Tobías Gonzalez">
        <button className="px-4 py-2 text-white font-medium bg-indigo-600 rounded-md hover:bg-indigo-700 hover:shadow-md transition-all w-full md:w-60">
          {label}
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
