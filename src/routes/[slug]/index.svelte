<script context="module" lang="ts">
    const allposts = import.meta.globEager(`/posts/*.md`)

    let posts: {post: any, slug: string}[] = []

    for (let path in allposts){
        posts.push({post: allposts[path], slug: allposts[path].metadata.slug})
    }

    export async function load({params}) {
        const { slug } = params

        const filteredPost = posts.find((p) => {
            return p.slug.toLowerCase() === (slug as string).toLowerCase()
        })

        if(filteredPost){
            return {
                props: {
                    post: filteredPost
                }
            }
        }
    }
</script>
<script lang="ts">
    export let post;

    console.log(post)
</script>

<h1>ren</h1>

<svelte:component this={post.post.default} />