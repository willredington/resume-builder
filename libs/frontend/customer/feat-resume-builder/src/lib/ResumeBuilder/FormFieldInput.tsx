import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export function FormFieldInput<Key extends string>({
  fieldKey,
  label,
  fieldError,
  registerReturn,
  type,
  placeholder,
}: Pick<InputProps, 'type' | 'placeholder'> & {
  fieldKey: Key;
  label: string;
  fieldError?: FieldError;
  registerReturn: UseFormRegisterReturn<Key>;
}) {
  return (
    <FormControl isInvalid={!!fieldError}>
      <FormLabel htmlFor={fieldKey}>{label}</FormLabel>
      <Input
        id={fieldKey}
        type={type}
        placeholder={placeholder}
        {...registerReturn}
      />
      <FormErrorMessage>{fieldError && fieldError.message}</FormErrorMessage>
    </FormControl>
  );
}
