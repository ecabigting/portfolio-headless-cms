import { defineField, defineType } from 'sanity'
import { pasteableTagsField } from '../components/PasteableTagsInput'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      description: 'The main title displayed in the hero section',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      description: 'Tagline beneath the main title',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      description: 'Avatar photo for the about section',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      description: 'Bio/about section content',
      type: 'text',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'City, Country',
      type: 'string',
    }),
    defineField({
      name: 'currentStatus',
      title: 'Current Status',
      description: 'Your current availability',
      type: 'string',
      options: {
        list: [
          { title: 'Open to Work', value: 'open-to-work' },
          { title: 'Open to Freelance', value: 'open-to-freelance' },
          { title: 'Open to Full-time', value: 'open-to-fulltime' },
          { title: 'Not Available', value: 'not-available' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: 'Contact email address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      description: 'Contact phone number',
      type: 'string',
    }),
    defineField({
      name: 'cvLink',
      title: 'CV Link',
      description: 'URL to your downloadable CV',
      type: 'url',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      description: 'URL to your GitHub profile',
      type: 'url',
    }),
    defineField({
      name: 'linkedinLink',
      title: 'LinkedIn Link',
      description: 'URL to your LinkedIn profile',
      type: 'url',
    }),
    defineField({
      ...pasteableTagsField,
      name: 'skills',
      title: 'Skills',
      description: 'Your skills. Paste comma-separated values to add multiple at once!',
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      description: 'Professional certifications you have earned',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Certificate Title',
              type: 'string',
            }),
            defineField({
              name: 'issuingBody',
              title: 'Issuing Body',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'issuingBody',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      description: 'Your work experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'role',
              subtitle: 'company',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      description: 'Additional social media profiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Dribbble', value: 'dribbble' },
                  { title: 'Behance', value: 'behance' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Dev.to', value: 'devto' },
                  { title: 'Other', value: 'other' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'subTitle',
      media: 'profileImage',
    },
  },
})
