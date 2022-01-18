<script context="module" lang="ts">
    const allposts = import.meta.globEager(`/posts/*.md`)

    console.log(allposts)

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
    import { onMount } from "svelte";

    export let post;

    $: title = post.post.metadata.title
    $: link = ''

    onMount(() => {
        link = window.location.href
    })
</script>


<div class="flex flex-col">
    <h1 class="text-4xl font-bold mb-6 border-b py-3">{title}</h1>
    <article class="prose prose-xl">
        <svelte:component this={post.post.default} />
    </article>

    <div class="border-t p-1 m-1">
        {link}
    </div>
</div>