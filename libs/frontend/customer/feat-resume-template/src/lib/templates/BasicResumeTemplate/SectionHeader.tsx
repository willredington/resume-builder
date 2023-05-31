import { Text } from '@react-pdf/renderer';
import { Colors } from '../colors';
import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  root: {
    color: Colors.Red,
    fontWeight: 'bold',
    fontSize: '13px',
    marginBottom: 10,
  },
});

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return <Text style={styles.root}>{children}</Text>;
}
