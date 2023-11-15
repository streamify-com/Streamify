import { IoShieldHalfSharp as icon } from "react-icons/io5";

const club = {
  name: "club",
  title: "Club",
  type: "document",
  icon,
  fields: [
    {
      name: "firstname",
      title: "Firstname",
      type: "string",
      description: "Please remember to provide only one first name.",
    },
    {
      name: "lastname",
      title: "Lastname",
      type: "string",
      description: "Please remember to provide only one last name.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: any) => `${doc.firstname}-${doc.lastname}`,
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "nationality",
      title: "Nationality",
      type: "reference",
      to: [{ type: "nationality" }],
      description: "What is the official nationality of the person?",
    },
  ],
  preview: {
    select: {
      title: "title",
      lastname: "lastname",
      firstname: "firstname",
      media: "image",
    },
    prepare({ lastname, firstname, media }: any) {
      const previewTitle = `${lastname}, ${firstname}`;
      return {
        title: previewTitle,
        media,
      };
    },
  },
};

export default club;
