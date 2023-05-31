import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps,
} from '@chakra-ui/react';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

export function FormFieldSelect<TForm extends FieldValues>({
  fieldKey,
  label,
  control,
  placeholder,
  options,
}: Pick<SelectProps, 'placeholder'> & {
  fieldKey: Path<TForm>;
  label: string;
  control: Control<TForm>;
  fieldError?: FieldError;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <Controller
      control={control}
      name={fieldKey}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl py={4} isInvalid={!!error} id="food">
          <FormLabel>{label}</FormLabel>
          <Select
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
          >
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
}
