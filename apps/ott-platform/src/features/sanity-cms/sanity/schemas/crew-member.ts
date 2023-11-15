const crewMember = {
  name: "crewMember",
  title: "Crew Member",
  type: "object",
  fields: [
    {
      name: "department",
      title: "Department",
      type: "string",
    },
    {
      name: "job",
      title: "Job",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "externalId",
      title: "External ID",
      type: "number",
    },
    {
      name: "externalCreditId",
      title: "External Credit ID",
      type: "string",
    },
  ],
  preview: {
    select: {
      name: "author.name",
      job: "job",
      department: "department",
      media: "author.image",
    },
    prepare(selection: { name: any; job: any; department: any; media: any }) {
      const { name, job, department, media } = selection;
      return {
        title: name,
        subtitle: `${job} [${department}]`,
        media,
      };
    },
  },
};

export default crewMember;
