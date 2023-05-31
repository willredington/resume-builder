import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export function FormFieldTextArea<Key extends string>({
  fieldKey,
  label,
  fieldError,
  registerReturn,
  placeholder,
}: Pick<TextareaProps, 'placeholder'> & {
  fieldKey: Key;
  label: string;
  fieldError?: FieldError;
  registerReturn: UseFormRegisterReturn<Key>;
}) {
  return (
    <FormControl isInvalid={!!fieldError}>
      <FormLabel htmlFor={fieldKey}>{label}</FormLabel>
      <Textarea id={fieldKey} placeholder={placeholder} {...registerReturn} />
      <FormErrorMessage>{fieldError && fieldError.message}</FormErrorMessage>
    </FormControl>
  );
}
