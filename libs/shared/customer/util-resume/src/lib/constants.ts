import { ResumeBuilderStep } from './types';

export const ALL_STEPS: ResumeBuilderStep[] = [
  ResumeBuilderStep.BASIC_INFO,
  ResumeBuilderStep.WORK_HISTORY,
  ResumeBuilderStep.SKILLS,
  ResumeBuilderStep.TEMPLATE_SELECTION,
];

export const RESUME_BUILDER_STEP_DESC_MAP: Record<ResumeBuilderStep, string> = {
  [ResumeBuilderStep.BASIC_INFO]: 'Basic Info',
  [ResumeBuilderStep.WORK_HISTORY]: 'Work History',
  [ResumeBuilderStep.SKILLS]: 'Skills',
  [ResumeBuilderStep.TEMPLATE_SELECTION]: 'Template Selection',
  [ResumeBuilderStep.REFERENCES]: 'References',
};
