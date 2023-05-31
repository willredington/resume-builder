import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { EmploymentHistory } from '@resume-builder/shared/customer/util-resume';
import { Colors } from '../../colors';

export const styles = StyleSheet.create({
  root: {
    fontSize: '12px',
    display: 'flex',
    gap: '10px',
  },
  header: {
    flexDirection: 'row',
    display: 'flex',
    gap: '10px',
  },
  companyTitle: {
    color: Colors.Red,
    fontWeight: 'bold',
  },
  role: {
    fontStyle: 'italic',
    color: Colors.Gray,
  },
  dateRange: {
    color: Colors.LightGray,
  },
  description: {
    color: Colors.Gray,
    lineHeight: '1.25',
  },
});

export function WorkExperienceItem({
  historyItem,
}: {
  historyItem: EmploymentHistory;
}) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.companyTitle}>98point6, Remote</Text>
        <Text style={styles.role}>Software Engineer II</Text>
      </View>
      <Text style={styles.dateRange}>June 2021 - PRESENT</Text>
      <Text style={styles.description}>
        98point6 is a healthcare company that utilizes AI and text-based primary
        care solutions to make getting medical care much easier and more
        affordable. My role is to help design and develop software solutions
        used by doctors that utilize the various solutions to serve clients
        better. Projects include a client-facing portal using React, various
        native mobile applications, and several different APIs supporting
        multiple complex processes.
      </Text>
    </View>
  );
}
