import React from "react";

interface NextStepButtonProps {
  onClick: () => void;
}

const NextStepButton: React.FC<NextStepButtonProps> = ({ onClick }) => {
  return (
    <div
      className="sticky bottom-0 w-full mt-8  bg-white flex justify-center"
    >
      <button
        type="button"
        className="w-60 px-4 py-2 text-white font-bold rounded-lg "
        style={{ backgroundColor: "#a59973", borderColor: "#a59973" }}
        onClick={onClick}
      >
        NEXT STEP
      </button>
    </div>
  );
};

export default NextStepButton;
