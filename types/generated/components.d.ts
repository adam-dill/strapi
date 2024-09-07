import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperienceEntryExperienceTask extends Schema.Component {
  collectionName: 'components_experience_entry_experience_tasks';
  info: {
    displayName: 'ExperienceTask';
    description: '';
  };
  attributes: {
    ExperienceTask: Attribute.Text & Attribute.Required;
  };
}

export interface ExperienceEntryExperience extends Schema.Component {
  collectionName: 'components_experience_entry_experiences';
  info: {
    displayName: 'Experience';
    description: '';
  };
  attributes: {
    CompanyName: Attribute.String & Attribute.Required;
    SubcontractName: Attribute.String;
    StartDate: Attribute.Date;
    EndDate: Attribute.Date;
    CompanyUrl: Attribute.String;
    ExperienceTask: Attribute.Component<
      'experience-entry.experience-task',
      true
    >;
  };
}

export interface ResumeSectionHeaderResumeSection extends Schema.Component {
  collectionName: 'components_resume_section_resume_sections';
  info: {
    displayName: 'Resume SectionHeader';
    description: '';
  };
  attributes: {
    IconClass: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experience-entry.experience-task': ExperienceEntryExperienceTask;
      'experience-entry.experience': ExperienceEntryExperience;
      'resume-section-header.resume-section': ResumeSectionHeaderResumeSection;
    }
  }
}
