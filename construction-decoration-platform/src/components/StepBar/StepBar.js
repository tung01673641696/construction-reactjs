import React from "react";
import { Steps } from "antd";
const { Step } = Steps;

const StepBar = ({ steps, activeStep }) => {
  return (
    <div className="mt-4 mb-4">
      <Steps size="small" current={activeStep}>
        {steps.map((step) => (
          <Step title={step} />
        ))}
      </Steps>
    </div>
  );
};

export default StepBar;
