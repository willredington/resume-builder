import { Button, Heading, HStack, Stack } from '@chakra-ui/react';
import { SectionHeader } from '@resume-builder/frontend/shared/ui-common';
import { BasicInfoFormData } from '@resume-builder/shared/customer/util-resume';
import {
  FieldErrors,
  UseFieldArrayReturn,
  UseFormRegister,
} from 'react-hook-form';
import { FormFieldInput } from '../FormFieldInput';

export function LinkFormSection({
  fieldArray,
  register,
  errors,
  onDelete,
}: {
  register: UseFormRegister<BasicInfoFormData>;
  fieldArray: UseFieldArrayReturn<BasicInfoFormData, 'links', 'id'>;
  errors: FieldErrors<BasicInfoFormData>;
  onDelete: (index: number) => void;
}) {
  return (
    <Stack spacing={6}>
      <Heading size="md">Additional Info</Heading>
      {fieldArray.fields.map((field, index) => (
        <Stack key={field.id} spacing={4}>
          <SectionHeader
            label={`Link #${index + 1}`}
            tooltip="Remove this link"
            onDelete={() => onDelete(index)}
          />
          <HStack justify="space-between">
            <FormFieldInput
              label="Label"
              fieldKey="name"
              fieldError={errors.links?.[index]?.name}
              placeholder="Label for the link"
              registerReturn={register(`links.${index}.name`)}
            />
            <FormFieldInput
              label="Link"
              fieldKey="value"
              fieldError={errors.links?.[index]?.value}
              placeholder="Link to personal website or portfolio"
              registerReturn={register(`links.${index}.value`, {
                required: 'This is a required field',
              })}
            />
          </HStack>
        </Stack>
      ))}
      <HStack>
        <Button
          onClick={() =>
            fieldArray.append({
              name: '',
              value: '',
            })
          }
        >
          Add Another
        </Button>
      </HStack>
    </Stack>
  );
}
