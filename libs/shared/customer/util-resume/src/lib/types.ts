import * as z from 'zod';

export enum ResumeBuilderStep {
  BASIC_INFO,
  WORK_HISTORY,
  SKILLS,
  REFERENCES,
  TEMPLATE_SELECTION,
}

const nonEmptyString = z.string().min(1);

const EducationSchema = z.object({
  schoolName: nonEmptyString,
  degree: nonEmptyString,
  startDate: nonEmptyString,
  endDate: nonEmptyString,
});

export type Education = z.infer<typeof EducationSchema>;

const LinkSchema = z.object({
  name: nonEmptyString.optional(),
  value: nonEmptyString,
});

export const BasicInfoFormSchema = z.object({
  firstName: nonEmptyString,
  lastName: nonEmptyString,
  phoneNumber: nonEmptyString,
  email: nonEmptyString,
  city: nonEmptyString,
  state: nonEmptyString,
  education: z.array(EducationSchema).optional(),
  links: z.array(LinkSchema).optional(),
});

export type BasicInfoFormData = z.infer<typeof BasicInfoFormSchema>;

const EmploymentHistorySchema = z.object({
  companyName: nonEmptyString,
  companyLocation: nonEmptyString.optional(),
  startDate: nonEmptyString,
  endDate: z.string().optional(),
  role: nonEmptyString,
  description: nonEmptyString,
});

export const EmploymentHistoryFormSchema = z.object({
  history: z.array(EmploymentHistorySchema).min(1),
});

export type EmploymentHistoryFormData = z.infer<
  typeof EmploymentHistoryFormSchema
>;

const Skill = z.object({
  name: nonEmptyString,
  competency: z.enum(['low', 'medium', 'high']).optional(),
});

export const SkillFormSchema = z.object({
  skills: z.array(Skill),
});

export type SkillFormData = z.infer<typeof SkillFormSchema>;

// objective / header
// reference
