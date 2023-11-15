import { LiaGlobeAfricaSolid as icon } from "react-icons/lia";

const nationality = {
  name: "nationality",
  title: "Nationality",
  type: "document",
  icon,
  fields: [
    {
      name: "nation",
      title: "Nation",
      type: "string",
      description: "Provide the country name of the nation.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "nation",
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
  ],
  preview: {
    select: { title: "nation", media: "image" },
  },
};

export default nationality;
