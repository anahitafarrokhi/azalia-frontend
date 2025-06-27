import React from "react";

interface Step {
  stepNumber: number;
  title: string;
  subtitle: string;
  price?: string;
  viewHandler?: () => void;
  removeHandler?: () => void;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

const Steps: React.FC<StepperProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex w-full items-center justify-center">
      {steps.map((step, index) => {
        const isActive = currentStep === step.stepNumber;
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;

        return (
          <button
            key={step.stepNumber}
            className={`relative flex-1 text-center py-4 cursor-pointer   ${isActive ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            style={{
              clipPath: isFirst
                ? "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%)"
                : isLast
                  ? "polygon(0px 0%, calc(100% - 19px) 0%, 100% 50%, calc(100% - 20px) 100%, 0px 100%)"
                  : "polygon(0px 0%, calc(100% - 19px) 0%, 100% 50%, calc(100% - 20px) 100%, 0px 100%)",
            }}
            onClick={() =>
              onStepClick(step.stepNumber)
            }
          >
            <div className="text-sm sm:text-xl font-semibold ">
              {step.stepNumber}. {step.title}
            </div>
            <div className="text-sm sm:text-xl mt-1">{step.subtitle}</div>
            {step.price && (
              <div className="text-sm font-medium mt-2">{step.price}</div>
            )}
            {isActive && step.viewHandler && step.removeHandler && (
              <div className="flex justify-center space-x-2 mt-1 text-xs underline">
                <button onClick={step.viewHandler}>View</button>
                <span>|</span>
                <button onClick={step.removeHandler}>Remove</button>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Steps;
