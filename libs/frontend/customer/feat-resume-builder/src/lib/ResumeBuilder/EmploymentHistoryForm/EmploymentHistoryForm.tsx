import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { useAppStore } from '@resume-builder/frontend/customer/util-store';
import {
  EmploymentHistoryFormData,
  EmploymentHistoryFormSchema,
} from '@resume-builder/shared/customer/util-resume';
import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { EmploymentHistoryFormField } from './EmploymentHistoryFormField';
import { zodResolver } from '@hookform/resolvers/zod';

type EmploymentHistoryItem = EmploymentHistoryFormData['history'][0];

const defaultEmployHistoryItem: EmploymentHistoryItem = {
  companyLocation: '',
  companyName: '',
  description: '',
  role: '',
  startDate: '',
};

export function EmploymentHistoryForm({
  goBack,
  onSave,
}: {
  goBack: () => void;
  onSave: () => void;
}) {
  const employmentHistoryFormData = useAppStore(
    useCallback((store) => store.employmentHistoryFormData, [])
  );

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmploymentHistoryFormData>({
    resolver: zodResolver(EmploymentHistoryFormSchema),
    defaultValues: employmentHistoryFormData ?? {
      history: [defaultEmployHistoryItem],
    },
  });

  const fieldArray = useFieldArray({
    control,
    name: 'history',
  });

  const setEmploymentHistory = useAppStore(
    useCallback((store) => store.setEmploymentHistoryFormData, [])
  );

  const appendItem = useCallback(() => {
    fieldArray.append(defaultEmployHistoryItem);
  }, [fieldArray]);

  const onSubmit = handleSubmit(({ history }) => {
    setEmploymentHistory({ history });
    onSave();
    reset();
  });

  const moreThanOne = fieldArray.fields.length > 1;

  return (
    <Card>
      <CardHeader>
        <Heading>Employment History</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit}>
          <Stack spacing={8}>
            <>
              {fieldArray.fields.map((field, fieldIndex) => (
                <EmploymentHistoryFormField
                  key={field.id}
                  fieldIndex={fieldIndex}
                  register={register}
                  onRemove={
                    moreThanOne
                      ? () => fieldArray.remove(fieldIndex)
                      : undefined
                  }
                />
              ))}
            </>
          </Stack>
          <HStack mt={4}>
            <ButtonGroup>
              <Button onClick={goBack}>Go Back</Button>
              <Button type="submit" isDisabled={!isValid}>
                Save & Continue
              </Button>
            </ButtonGroup>
            <Spacer />
            <Button onClick={appendItem}>Add Item</Button>
          </HStack>
        </form>
      </CardBody>
    </Card>
  );
}
