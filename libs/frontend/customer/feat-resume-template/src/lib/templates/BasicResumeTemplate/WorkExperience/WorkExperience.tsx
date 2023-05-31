import { Text, View } from '@react-pdf/renderer';
import { EmploymentHistoryFormData } from '@resume-builder/shared/customer/util-resume';
import { SectionHeader } from '../SectionHeader';
import { WorkExperienceItem } from './WorkExperienceItem';
import { Colors } from '../../colors';
import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  root: {
    color: Colors.Red,
    fontWeight: 'bold',
    fontSize: '13px',
    marginBottom: 10,
  },
  header: {
    marginBottom: '10px',
  },
});

export function WorkExperience({
  employmentHistoryFormData: { history },
}: {
  employmentHistoryFormData: EmploymentHistoryFormData;
}) {
  return (
    <View>
      <View style={styles.header}>
        <SectionHeader>
          <Text>EXPERIENCE</Text>
        </SectionHeader>
      </View>
      <View>
        {history.map((historyItem, index) => (
          <WorkExperienceItem key={index} historyItem={historyItem} />
        ))}
      </View>
    </View>
  );
}
