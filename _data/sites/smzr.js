module.exports = {
	name: "smzr.co.uk", // optional, falls back to object key
	description: "Sammy McKay's personal website",
	skip: false,
	options: {
		frequency: 60 * 24, // 24 hours
		freshChrome: "site"
	},
	urls: [
		"https://www.smzr.co.uk/",
		"https://www.smzr.co.uk/projects/",
		"https://www.smzr.co.uk/snippets/",
		"https://www.smzr.co.uk/blog/",
		"https://www.smzr.co.uk/contact/",
		// Popular Posts
		"https://www.smzr.co.uk/blog/yet-another-website-rebuild-11ty/",
		"https://www.smzr.co.uk/blog/adding-netlify-cms-to-11ty/",
	]
};