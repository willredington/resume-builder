import {
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { SectionHeader } from '@resume-builder/frontend/shared/ui-common';
import { BasicInfoFormData } from '@resume-builder/shared/customer/util-resume';
import {
  FieldErrors,
  UseFieldArrayReturn,
  UseFormRegister,
} from 'react-hook-form';
import { FormFieldInput } from '../FormFieldInput';

export function EducationFormSection({
  fieldArray,
  register,
  errors,
  onDelete,
}: {
  fieldArray: UseFieldArrayReturn<BasicInfoFormData, 'education', 'id'>;
  register: UseFormRegister<BasicInfoFormData>;
  errors: FieldErrors<BasicInfoFormData>;
  onDelete: (index: number) => void;
}) {
  return (
    <Stack spacing={6}>
      <Heading size="md">Education Info</Heading>
      {fieldArray.fields.map((field, index) => (
        <Stack key={field.id} spacing={4}>
          <SectionHeader
            label={`Education #${index + 1}`}
            tooltip="Remove this education entry"
            onDelete={() => onDelete(index)}
          />
          <Grid templateColumns="repeat(2, 1fr)" gap="6">
            <GridItem colSpan={2}>
              <FormFieldInput
                label="School Name"
                fieldKey="schoolName"
                placeholder="Name of university or school"
                fieldError={errors.education?.[index]?.schoolName}
                registerReturn={register(`education.${index}.schoolName`, {
                  required: 'This is a required field',
                })}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <FormFieldInput
                label="Degree / Certificate"
                fieldKey="degree"
                fieldError={errors.education?.[index]?.degree}
                placeholder="Degree or certificate earned"
                registerReturn={register(`education.${index}.degree`, {
                  required: 'This is a required field',
                })}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <FormFieldInput
                label="Start Date"
                fieldKey="startDate"
                fieldError={errors.education?.[index]?.startDate}
                type="date"
                registerReturn={register(`education.${index}.startDate`, {
                  required: 'This is a required field',
                })}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <FormFieldInput
                label="End Date"
                fieldKey="endDate"
                fieldError={errors.education?.[index]?.endDate}
                type="date"
                registerReturn={register(`education.${index}.endDate`, {
                  required: 'This is a required field',
                })}
              />
            </GridItem>
          </Grid>
        </Stack>
      ))}
      <HStack>
        <Tooltip label="Add an additional education entry">
          <Button
            aria-label="add-btn"
            onClick={() =>
              fieldArray.append({
                schoolName: '',
                degree: '',
                startDate: '',
                endDate: '',
              })
            }
          >
            Add Another
          </Button>
        </Tooltip>
      </HStack>
    </Stack>
  );
}
