import { defineField, defineType } from "sanity";
import { FaTrophy as icon } from "react-icons/fa";

export default defineType({
  name: "competition",
  title: "Competition",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
