import {
  ALL_STEPS,
  RESUME_BUILDER_STEP_DESC_MAP,
} from '@resume-builder/shared/customer/util-resume';
import { Step, Steps } from 'chakra-ui-steps';

export function StepProgress({
  currentStepIndex,
}: {
  currentStepIndex: number;
}) {
  return (
    <Steps activeStep={currentStepIndex}>
      {ALL_STEPS.map((step) => (
        <Step key={step} label={RESUME_BUILDER_STEP_DESC_MAP[step]} />
      ))}
    </Steps>
  );
}
