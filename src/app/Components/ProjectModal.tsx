import Image from "next/image";
export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-purple-500"
        >
          &times;
        </button>
        <h3 className="text-lg font-semibold text-white mb-4">
          {project.title}
        </h3>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="rounded-lg mb-4"
        />
        <p className="text-white mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
