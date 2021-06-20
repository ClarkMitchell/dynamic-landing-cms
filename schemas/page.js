export default {
  // Setup a 'document' type to house the page builder field
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      title: "Page Name",
      name: "pageName",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { type: "hero" },
        { type: "textWithIllustration" },
        { type: "callToAction" },
        { type: "gallery" },
        { type: "form" },
        { type: "video" },
        { type: "services" }
      ],
    },
  ],
};
