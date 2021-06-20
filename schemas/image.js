export default {
    name: "image",
    type: "image",
    title: "Image",
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: "alt",
            type: "string",
            title: "Alternative text",
            validation: (Rule) => Rule.required().min(10).max(80),
        },
    ],
}