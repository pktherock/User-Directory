import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function Post({ postInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  // model ref
  const modalRef = useRef(null);

  const { title, body } = postInfo;

  // Run when isOpen change
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white p-6 rounded shadow-lg w-2/4">
            <span
              className="float-right text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              X
            </span>
            <h2 className="text-xl font-bold mb-4">Post Details</h2>

            <div className="w-full flex flex-col gap-4">
              <p>
                <span className="font-semibold">Title :</span> {title}
              </p>
              <p>
                <span className="font-semibold">Body : </span>
                {body}
              </p>
            </div>
          </div>
        </div>
      )}
      <div
        className="border rounded-lg shadow-lg p-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <p>
          <span className="font-semibold">Title :</span> {title}
        </p>
        <p>
          <span className="font-semibold">Body : </span>
          {body}
        </p>
      </div>
    </>
  );
}

Post.propTypes = {
  postInfo: PropTypes.object.isRequired,
};

export default Post;
