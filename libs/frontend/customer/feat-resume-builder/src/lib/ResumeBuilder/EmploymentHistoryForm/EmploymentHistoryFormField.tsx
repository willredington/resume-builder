import { GridItem, SimpleGrid, Stack } from '@chakra-ui/react';
import { SectionHeader } from '@resume-builder/frontend/shared/ui-common';
import { EmploymentHistoryFormData } from '@resume-builder/shared/customer/util-resume';
import { UseFormRegister } from 'react-hook-form';
import { FormFieldInput } from '../FormFieldInput';
import { FormFieldTextArea } from '../FormFieldTextArea';

const colSpanResponsive = {
  lg: 1,
  sm: 2,
};

export function EmploymentHistoryFormField({
  fieldIndex,
  register,
  onRemove,
}: {
  fieldIndex: number;
  register: UseFormRegister<EmploymentHistoryFormData>;
  onRemove?: () => void;
}) {
  return (
    <Stack position="relative" spacing={6} mb={4}>
      <SectionHeader
        label={`Employment History #${fieldIndex + 1}`}
        onDelete={onRemove}
      />
      <SimpleGrid columns={2} gap={4}>
        <GridItem colSpan={colSpanResponsive}>
          <FormFieldInput
            fieldKey="companyName"
            label="Company Name"
            placeholder="Google, Amazon, Spotify"
            registerReturn={register(`history.${fieldIndex}.companyName`, {
              required: 'This is a required field',
            })}
          />
        </GridItem>
        <GridItem colSpan={colSpanResponsive}>
          <FormFieldInput
            fieldKey="companyLocation"
            label="Company Location"
            placeholder="Seattle, Washington"
            registerReturn={register(`history.${fieldIndex}.companyLocation`)}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormFieldInput
            fieldKey="role"
            label="Job Role"
            placeholder="HR, Senior Manager, Medical Doctor"
            registerReturn={register(`history.${fieldIndex}.role`, {
              required: 'This is a required field',
            })}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormFieldTextArea
            fieldKey="description"
            label="Job Description"
            placeholder="Enter job description"
            registerReturn={register(`history.${fieldIndex}.description`, {
              required: 'This is a required field',
            })}
          />
        </GridItem>
        <FormFieldInput
          fieldKey="startDate"
          label="Start Date"
          type="date"
          registerReturn={register(`history.${fieldIndex}.startDate`, {
            required: 'This is a required field',
          })}
        />
        <FormFieldInput
          fieldKey="endDate"
          label="End Date"
          type="date"
          registerReturn={register(`history.${fieldIndex}.endDate`)}
        />
      </SimpleGrid>
    </Stack>
  );
}
