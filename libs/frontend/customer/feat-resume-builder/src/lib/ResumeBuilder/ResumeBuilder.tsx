import { Container, Stack } from '@chakra-ui/react';
import {
  IndexDirection,
  useAppStore,
} from '@resume-builder/frontend/customer/util-store';
import {
  ALL_STEPS,
  ResumeBuilderStep,
} from '@resume-builder/shared/customer/util-resume';
import { useCallback, useMemo } from 'react';
import { BasicInfoForm } from './BasicInfoForm/BasicInfoForm';
import { EmploymentHistoryForm } from './EmploymentHistoryForm';
import { StepProgress } from './StepProgress';
import { SkillForm } from './SkillForm';
import { TemplateSelection } from './TemplateSelection';

export function ResumeBuilder() {
  const [currentStepIndex, setCurrentStepIndex] = useAppStore(
    useCallback(
      (store) => [store.currentStepIndex, store.setCurrentStepIndex] as const,
      []
    )
  );

  const goForward = useCallback(
    () => setCurrentStepIndex(IndexDirection.Forward),
    [setCurrentStepIndex]
  );

  const goBack = useCallback(
    () => setCurrentStepIndex(IndexDirection.Backward),
    [setCurrentStepIndex]
  );

  return (
    <Container
      my="8"
      maxW={{
        md: 'container.lg',
        sm: 'container.sm',
      }}
    >
      <Stack spacing={6}>
        <StepProgress currentStepIndex={currentStepIndex} />
        {currentStepIndex === 0 && <BasicInfoForm onSave={goForward} />}
        {currentStepIndex === 1 && (
          <EmploymentHistoryForm goBack={goBack} onSave={goForward} />
        )}
        {currentStepIndex === 2 && (
          <SkillForm goBack={goBack} onSave={goForward} />
        )}
        {currentStepIndex === 3 && <TemplateSelection onSave={goForward} />}
      </Stack>
    </Container>
  );
}
