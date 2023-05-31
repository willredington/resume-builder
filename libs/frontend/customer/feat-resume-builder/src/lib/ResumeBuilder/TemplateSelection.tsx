import {
  BasicResumeTemplate,
  TemplateView,
} from '@resume-builder/frontend/customer/feat-resume-template';
import { useAppStore } from '@resume-builder/frontend/customer/util-store';
import { useCallback } from 'react';

export function TemplateSelection({ onSave }: { onSave: () => void }) {
  const [basicInfoFormData, employmentHistoryFormData] = useAppStore(
    useCallback(
      (store) =>
        [store.basicInfoFormData, store.employmentHistoryFormData] as const,
      []
    )
  );

  if (basicInfoFormData && employmentHistoryFormData) {
    return (
      <TemplateView>
        <BasicResumeTemplate
          basicInfoFormData={basicInfoFormData}
          employmentHistoryFormData={employmentHistoryFormData}
        />
      </TemplateView>
    );
  }

  return null;
}
