import { Text } from '@react-pdf/renderer';
import { Colors } from '../colors';
import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  root: {
    textAlign: 'left',
    fontSize: '12px',
    color: Colors.Gray,
    lineHeight: '1.5',
  },
});

export function SectionBody({ children }: { children: React.ReactNode }) {
  return <Text style={styles.root}>{children}</Text>;
}
