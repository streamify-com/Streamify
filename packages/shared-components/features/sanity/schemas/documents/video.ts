import { format, parseISO } from "date-fns";
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'videoPost',
  title: 'Video Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      description:
        'Set the URL of your post, e.g. www.streamify.com/YOUR-CUSTOM-URL',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      description:
        'Attention: Kepp the window open until the video upload has been completed.',
    }),
    defineField({
      name: 'thumbnailPicture',
      title: 'Thumbnail picture',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'shortStory',
      title: 'Short story',
      type: 'string',
    }),
    defineField({
      name: 'fullStory',
      title: 'Full story',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      publishedAt: 'publishedAt',
      media: 'thumbnailPicture',
    },
    prepare({ title, media, author, publishedAt }) {
      const subtitles = [
        author && `by ${author}`,
        publishedAt && `on ${format(parseISO(publishedAt), "LLL d, yyyy")}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(" ") };
    },
  },
});