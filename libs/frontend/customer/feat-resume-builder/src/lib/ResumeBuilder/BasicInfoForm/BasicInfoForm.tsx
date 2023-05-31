import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppStore } from '@resume-builder/frontend/customer/util-store';
import {
  BasicInfoFormData,
  BasicInfoFormSchema,
} from '@resume-builder/shared/customer/util-resume';
import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { IoIosAddCircle, IoMdSchool } from 'react-icons/io';
import { EMAIL_RX, PHONE_NUMBER_RX } from '../constants';
import { FormFieldInput } from '../FormFieldInput';
import { EducationFormSection } from './EducationFormSection';
import { LinkFormSection } from './LinkFormSection';

export function BasicInfoForm({ onSave }: { onSave: () => void }) {
  const {
    isOpen: isEducationOpen,
    onOpen: openEducation,
    onClose: closeEducation,
  } = useDisclosure();

  const {
    isOpen: isLinksOpen,
    onOpen: openLinks,
    onClose: closeLinks,
  } = useDisclosure();

  const basicInfoFormData = useAppStore(
    useCallback((store) => store.basicInfoFormData, [])
  );

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BasicInfoFormData>({
    resolver: zodResolver(BasicInfoFormSchema),
    defaultValues: basicInfoFormData ?? {},
  });

  const educationFieldArray = useFieldArray({
    control,
    name: 'education',
  });

  const linkFieldArray = useFieldArray({
    control,
    name: 'links',
  });

  const onAddEducation = useCallback(() => {
    educationFieldArray.append({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    openEducation();
  }, [openEducation, educationFieldArray]);

  const onDeleteEducationItem = useCallback(
    (index: number) => {
      if (educationFieldArray.fields.length === 1) {
        closeEducation();
      }

      educationFieldArray.remove(index);
    },
    [educationFieldArray, closeEducation]
  );

  const onAddLinks = useCallback(() => {
    linkFieldArray.append({
      name: '',
      value: '',
    });
    openLinks();
  }, [openLinks, linkFieldArray]);

  const onDeleteLinkItem = useCallback(
    (index: number) => {
      if (linkFieldArray.fields.length === 1) {
        closeLinks();
      }

      linkFieldArray.remove(index);
    },
    [linkFieldArray, closeLinks]
  );

  const setBasicInfo = useAppStore(
    useCallback((store) => store.setBasicInfoFormData, [])
  );

  const onSubmit = handleSubmit(async (basicInfo) => {
    setBasicInfo(basicInfo);
    onSave();
    reset();
  });

  return (
    <Card>
      <CardHeader>
        <HStack align="baseline">
          <Heading>Basic Info</Heading>
          <Spacer />
          <ButtonGroup size="sm" spacing={4}>
            <Button
              isDisabled={isEducationOpen}
              aria-label="add-edu-btn"
              rightIcon={<IoMdSchool />}
              onClick={onAddEducation}
            >
              Add Education
            </Button>
            <Button
              isDisabled={isLinksOpen}
              aria-label="add-links-btn"
              rightIcon={<IoIosAddCircle />}
              onClick={onAddLinks}
            >
              Add Links
            </Button>
          </ButtonGroup>
        </HStack>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit}>
          <Stack spacing={6}>
            <SimpleGrid
              columns={{
                md: 2,
                sm: 1,
              }}
              spacing={8}
            >
              <FormFieldInput
                label="First Name"
                fieldKey="firstName"
                fieldError={errors.firstName}
                registerReturn={register('firstName', {
                  required: 'This is a required field',
                })}
              />
              <FormFieldInput
                label="Last Name"
                fieldKey="lastName"
                fieldError={errors.lastName}
                registerReturn={register('lastName', {
                  required: 'This is a required field',
                })}
              />
              <FormFieldInput
                label="Email"
                fieldKey="email"
                fieldError={errors.email}
                registerReturn={register('email', {
                  required: 'This is a required field',
                  pattern: {
                    value: EMAIL_RX,
                    message: 'Invalid email',
                  },
                })}
              />
              <FormFieldInput
                label="Phone Number"
                fieldKey="phoneNumber"
                fieldError={errors.phoneNumber}
                registerReturn={register('phoneNumber', {
                  required: 'This is a required field',
                  pattern: {
                    value: PHONE_NUMBER_RX,
                    message: 'Invalid phone number',
                  },
                })}
              />
              <FormFieldInput
                label="City"
                fieldKey="city"
                fieldError={errors.city}
                registerReturn={register('city', {
                  required: 'This is a required field',
                })}
              />
              <FormFieldInput
                label="State"
                fieldKey="state"
                fieldError={errors.state}
                registerReturn={register('state', {
                  required: 'This is a required field',
                })}
              />
            </SimpleGrid>

            {isEducationOpen && (
              <>
                <Divider />
                <EducationFormSection
                  onDelete={onDeleteEducationItem}
                  fieldArray={educationFieldArray}
                  register={register}
                  errors={errors}
                />
              </>
            )}
            {isLinksOpen && (
              <>
                <Divider />
                <LinkFormSection
                  onDelete={onDeleteLinkItem}
                  fieldArray={linkFieldArray}
                  register={register}
                  errors={errors}
                />
              </>
            )}
          </Stack>
          <Button mt={6} type="submit" isDisabled={!isValid}>
            Save & Continue
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
