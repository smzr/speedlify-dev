module.exports = {
	name: "smzr.co.uk", // optional, falls back to object key
	description: "Sammy McKay's personal website",
	skip: false,
	options: {
		frequency: 1, // 1 min
		freshChrome: "site"
	},
	urls: [
		"https://smzr.co.uk/",
		"https://smzr.co.uk/projects/",
		"https://smzr.co.uk/snippets/",
		"https://smzr.co.uk/blog/",
		"https://smzr.co.uk/contact/",
		// Popular Posts
		"https://smzr.co.uk/blog/yet-another-website-rebuild-11ty/",
		"https://smzr.co.uk/blog/adding-netlify-cms-to-11ty/",
	]
};