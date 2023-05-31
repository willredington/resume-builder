import {
  ALL_STEPS,
  BasicInfoFormData,
  EmploymentHistoryFormData,
  SkillFormData,
} from '@resume-builder/shared/customer/util-resume';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IndexDirection } from './types';

type StateProps = {
  currentStepIndex: number;
  basicInfoFormData: BasicInfoFormData | null;
  employmentHistoryFormData: EmploymentHistoryFormData | null;
  skillFormData: SkillFormData | null;
};

type StateActions = {
  reset: () => void;
  setCurrentStepIndex: (direction: IndexDirection) => void;
  setSkillFormData: (formData: SkillFormData) => void;
  setBasicInfoFormData: (formData: BasicInfoFormData) => void;
  setEmploymentHistoryFormData: (formData: EmploymentHistoryFormData) => void;
};

type AppState = StateProps & StateActions;

const initialState: StateProps = {
  skillFormData: null,
  basicInfoFormData: null,
  employmentHistoryFormData: null,
  currentStepIndex: 0,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...initialState,

      reset: () => set(initialState),

      setCurrentStepIndex: (direction) =>
        set(({ currentStepIndex }) => {
          const desiredIndex =
            direction === IndexDirection.Forward
              ? currentStepIndex + 1
              : currentStepIndex - 1;

          const canMove =
            (direction === IndexDirection.Forward &&
              currentStepIndex < ALL_STEPS.length - 1) ||
            (direction === IndexDirection.Backward && currentStepIndex > 0);

          if (canMove) {
            return {
              currentStepIndex: desiredIndex,
            };
          }

          return {
            currentStepIndex,
          };
        }),

      setSkillFormData: (skillFormData) =>
        set({
          skillFormData,
        }),

      setBasicInfoFormData: (basicInfoFormData) =>
        set({
          basicInfoFormData,
        }),

      setEmploymentHistoryFormData: (employmentHistoryFormData) =>
        set({
          employmentHistoryFormData,
        }),
    }),
    {
      name: 'resume-builder-store',
    }
  )
);
