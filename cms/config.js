export default {
	cms_manual_init: true,
	backend: {
		name: "github", // github || test-repo
		repo: "eybbus/Homepage",
		branch: "netlify-cms-tutorial",
	},
	media_folder: "public/img",
	public_folder: "img",
	collections: [
		{
			name: "pages",
			label: "Pages",
			files: [
				{
					label: "Home",
					name: "home",
					file: "content/pages/home.md",
					fields: [
						{
							label: "Hero Title",
							name: "hero_title",
							widget: "string",
						},
						{
							label: "Hero Description",
							name: "hero_description",
							widget: "markdown",
						},
						{
							label: "Hero Image",
							name: "hero_image",
							widget: "image",
						},
					],
				},
				{
					label: 'Resume',
					name: 'resume',
					file: 'content/pages/resume.md',
					fields: [
						{
							label: 'JobTitle',
							name: 'title',
							widget: 'string',
						},
						{
							label: 'Company Name',
							name: 'company',
							widget: 'string',
						},
						{
							label: 'Star Date',
							name: 'startDate',
							widget: 'datetime',
							date_format: 'MM.YYYY',
						},
						{
							label: 'End Date',
							name: 'endDate',
							widget: 'datetime',
							date_format: 'MM.YYYY',
							required: false
						}
					]
				},
				{
					label: "/blog",
					name: "/blogInfo",
					file: "content/pages/blog.md",
					fields: [
						{
							label: "Title",
							name: "title",
							widget: "string",
						},
						{
							label: "Description",
							name: "description",
							widget: "text",
						},
						{
							label: "Image",
							name: "image",
							required: false,
							widget: "image",
						},
					],
				},
			],
		},
		{
			label: "blogPosts",
			name: "blog",
			folder: "content/pages/blog",
			create: true,
			identifier_field: "name",
			fields: [
				{
					label: "Name",
					name: "name",
					widget: "string",
				},
				{
					label: "Publish Date ",
					name: "date",
					widget: "datetime",
				},
				{
					label: "Featured Image",
					name: "thumbnail",
					widget: "image",
					required: false,
				},
				{
					label: "Tag",
					name: "tag",
					widget: "select",
					options: ["Thought", "Coding", "Life"],
				},
				{ label: "Body", name: "body", widget: "markdown" },
			],
		},
	],
};
