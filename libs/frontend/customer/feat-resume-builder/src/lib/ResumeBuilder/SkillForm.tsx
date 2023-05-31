import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppStore } from '@resume-builder/frontend/customer/util-store';
import {
  SkillFormData,
  SkillFormSchema,
} from '@resume-builder/shared/customer/util-resume';
import React, { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormFieldInput } from './FormFieldInput';
import { FormFieldSelect } from './FormFieldSelect';

const colSpanResponsive = {
  lg: 1,
  sm: 2,
};

const skillCompetencyOptions = [
  {
    label: 'Low',
    value: 'low',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'High',
    value: 'high',
  },
];

export function SkillForm({
  goBack,
  onSave,
}: {
  goBack: () => void;
  onSave: () => void;
}) {
  const setSkillFormData = useAppStore(
    useCallback((store) => store.setSkillFormData, [])
  );

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SkillFormData>({
    resolver: zodResolver(SkillFormSchema),
    defaultValues: {
      skills: [
        {
          name: undefined,
        },
      ],
    },
  });

  const fieldArray = useFieldArray({
    name: 'skills',
    control,
  });

  const appendItem = useCallback(
    () =>
      fieldArray.append({
        name: '',
      }),
    [fieldArray]
  );

  const onSubmit = handleSubmit((formData) => {
    setSkillFormData(formData);
    onSave();
  });

  return (
    <Card>
      <CardHeader>
        <Heading size="lg">Skills</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit}>
          <SimpleGrid columns={2} gap="0px 1em" alignItems="center">
            <>
              {fieldArray.fields.map((field, fieldIndex) => (
                <React.Fragment key={field.id}>
                  <GridItem colSpan={colSpanResponsive}>
                    <FormFieldInput
                      fieldKey="name"
                      label="Name"
                      placeholder="Public-speaking, French language...etc"
                      registerReturn={register(`skills.${fieldIndex}.name`, {
                        required: 'This is a required field',
                      })}
                    />
                  </GridItem>
                  <GridItem colSpan={colSpanResponsive}>
                    <FormFieldSelect
                      fieldKey={`skills.${fieldIndex}.competency`}
                      label="Skill Competency"
                      placeholder="Select a competency level (low, medium, high)"
                      control={control}
                      options={skillCompetencyOptions}
                    />
                  </GridItem>
                </React.Fragment>
              ))}
            </>
          </SimpleGrid>
          <HStack mt={4}>
            <ButtonGroup>
              <Button onClick={goBack}>Go Back</Button>
              <Button type="submit" isDisabled={!isValid}>
                Save & Continue
              </Button>
              <Button onClick={onSave}>Skip</Button>
            </ButtonGroup>
            <Spacer />
            <Button onClick={appendItem}>Add Item</Button>
          </HStack>
        </form>
      </CardBody>
    </Card>
  );
}
