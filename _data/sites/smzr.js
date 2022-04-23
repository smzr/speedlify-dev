module.exports = {
	name: "smzr.co.uk", // optional, falls back to object key
	description: "Sammy McKay's personal website",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
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