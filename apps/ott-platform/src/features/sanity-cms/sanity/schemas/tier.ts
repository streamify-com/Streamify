import { defineField, defineType } from "sanity";
import { IoIosPricetag as icon } from "react-icons/io";

export default defineType({
  name: "tier",
  title: "Tier",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "colorCode",
      title: "Hex Color Code",
      type: "string",
      description:
        "Define a color code for this category. This color will be used for the category badge (e.g. #DC052D).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
