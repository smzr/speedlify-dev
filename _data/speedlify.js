const CacheAsset = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
	let url = "https://funny-genie-801a2b.netlify.app/api/urls.json";
	let json = await CacheAsset(url, {
		duration: "1w",
		type: "json",
	});

	return json;
};