import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';  

export default {
    extensions: ['.svelte', '.md'],
    rehypePlugins: [
        rehypeExternalLinks,
        rehypeSlug
    ]
}