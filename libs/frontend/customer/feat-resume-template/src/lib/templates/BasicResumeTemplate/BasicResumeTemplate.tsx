import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '../../types';
import { Colors } from '../colors';
import { SectionBody } from './SectionBody';
import { SectionHeader } from './SectionHeader';
import { WorkExperience } from './WorkExperience';

export const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    margin: 15,
    paddingHorizontal: 50,
  },
  grayText: {
    color: Colors.LightGray,
  },
  redText: {
    color: Colors.Red,
  },
  title: {
    marginVertical: 25,
    fontWeight: 'bold',
  },
  bodyHeader: {
    lineHeight: '1.25',
    fontSize: '12px',
  },
});

export function BasicResumeTemplate({
  basicInfoFormData,
  employmentHistoryFormData,
}: TemplateProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.bodyHeader}>
          <Text style={styles.grayText}>Columbus, Ohio</Text>
          <Text style={styles.redText}>267-461-0842</Text>
          <Text style={styles.redText}>wcr5048@gmail.com</Text>
        </View>
        <View style={styles.title}>
          <Text>Will Redington</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <View>
            <SectionHeader>ABOUT</SectionHeader>
            <SectionBody>
              Full-stack software engineer with over six years of experience
              developing high-quality software in various industries, including
              aerospace, military, government, non-profit, and healthcare.
              Significant exposure to multiple technologies and skills,
              including more traditional enterprise-based software engineering
              approaches, to more specialized and modern stacks like serverless
              and infrastructure as code. Tasking involved wearing numerous hats
              in most aspects of the software development process in a
              fast-paced environment. My greatest assets are the ability to
              quickly learn things, write clean and efficient code, and teach
              other people.
            </SectionBody>
          </View>
          <WorkExperience
            employmentHistoryFormData={employmentHistoryFormData}
          />
        </View>
      </Page>
    </Document>
  );
}
