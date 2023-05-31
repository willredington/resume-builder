import {
  CloseButton,
  Heading,
  HStack,
  Spacer,
  Tooltip,
} from '@chakra-ui/react';

export function Header({
  label,
  tooltip,
  onDelete,
}: {
  label: string;
  tooltip?: string;
  onDelete?: () => void;
}) {
  return (
    <HStack spacing={4} align="baseline">
      <Heading size="sm" variant="neon">
        {label}
      </Heading>
      <Spacer />
      {onDelete && (
        <Tooltip label={tooltip ?? 'Delete item'}>
          <CloseButton onClick={onDelete} />
        </Tooltip>
      )}
    </HStack>
  );
}
