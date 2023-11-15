const people = {
  name: "people",
  title: "People",
  type: "object",
  fields: [
    {
      name: "person",
      title: "Person",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      lastname: "person.lastname",
      firstname: "person.firstname",
      media: "person.image",
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

export default people;
