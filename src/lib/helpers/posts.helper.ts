const imports = import.meta.globEager('/posts/*.md');

const posts = [];
for (const path in imports) {
	const post = imports[path];
	if (post) {
		posts.push({
			metadata: post.metadata,
			render: JSON.stringify(post.default.render())
		});
	
	}

}

// Filter the post and order them by published date
const filteredPosts = posts
	.filter((post) => !post.metadata.hidden)
	.sort((a, b) =>
		new Date(a.metadata.date).getTime() > new Date(b.metadata.date).getTime()
			? -1
			: new Date(a.metadata.date).getTime() < new Date(b.metadata.date).getTime()
			? 1
			: 0
	)

// Expose this info to other files
export default filteredPosts;