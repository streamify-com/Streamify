import { IoIosPlayCircle as icon } from "react-icons/io";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Video Post",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        "Set the URL of your post, e.g. www.streamify.dev/YOUR-CUSTOM-URL",
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "mux.video",
      description:
        "Attention: Kepp the window open until the video upload has been completed.",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Thumbnail picture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "tier",
      title: "Tier",
      type: "reference",
      to: { type: "tier" },
    }),
    defineField({
      name: "shortStory",
      title: "Short story",
      type: "string",
    }),
    defineField({
      name: "fullStory",
      title: "Full story",
      type: "blockContent",
    }),
    defineField({
      name: "people",
      title: "People",
      type: "array",
      of: [{ type: "people" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
