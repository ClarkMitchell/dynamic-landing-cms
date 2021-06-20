export default {
  name: "services",
  type: "object",
  title: "Services",
    fields: [
      {
          name: "heading",
          type: "string",
          title: "Heading"
      },
      {
          name: "services",
          type: "array",
          title: "Services",
          of: [
              {
                  name: "service",
                  type: "service",
                  title: "Service",
              }
          ],
      }
  ],
};
