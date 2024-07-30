module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy("stylesheet.css");
   eleventyConfig.addPassthroughCopy("./fonts");
   eleventyConfig.addPassthroughCopy("./media");
};

exports.render = function (data) {
	let posts = data.collections.post.reverse();
	return `<ul>
    ${posts.map((post) => `<li>${post.data.title}</li>`).join("\n")}
  </ul>`;
};