import type { Schema, Attribute } from '@strapi/strapi';

export interface ToolboxListSection extends Schema.Component {
  collectionName: 'components_toolbox_list_sections';
  info: {
    displayName: 'ListSection';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    ListItem: Attribute.Component<'toolbox.list-item', true> &
      Attribute.Required;
  };
}

export interface ToolboxListItem extends Schema.Component {
  collectionName: 'components_toolbox_list_items';
  info: {
    displayName: 'ListItem';
    description: '';
  };
  attributes: {
    ItemText: Attribute.String & Attribute.Required;
  };
}

export interface SocialSocialMediaItem extends Schema.Component {
  collectionName: 'components_social_social_media_items';
  info: {
    displayName: 'SocialMediaItem';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images'> & Attribute.Required;
    IconAltText: Attribute.String;
    Url: Attribute.String & Attribute.Required;
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

export interface EducationEducationItem extends Schema.Component {
  collectionName: 'components_education_education_items';
  info: {
    displayName: 'EducationItem';
  };
  attributes: {
    SchoolName: Attribute.String & Attribute.Required;
    DegreeType: Attribute.String & Attribute.Required;
    DegreeName: Attribute.String & Attribute.Required;
    CompletedDate: Attribute.Date & Attribute.Required;
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
    StartDate: Attribute.Date & Attribute.Required;
    EndDate: Attribute.Date;
    CompanyUrl: Attribute.String;
    ExperienceTask: Attribute.Component<
      'experience-entry.experience-task',
      true
    >;
    JobTitle: Attribute.String & Attribute.Required;
  };
}

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'toolbox.list-section': ToolboxListSection;
      'toolbox.list-item': ToolboxListItem;
      'social.social-media-item': SocialSocialMediaItem;
      'resume-section-header.resume-section': ResumeSectionHeaderResumeSection;
      'education.education-item': EducationEducationItem;
      'experience-entry.experience': ExperienceEntryExperience;
      'experience-entry.experience-task': ExperienceEntryExperienceTask;
    }
  }
}
