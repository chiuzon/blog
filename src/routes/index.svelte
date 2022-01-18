<script context="module" lang="ts">
    export async function load({fetch}) {
        const res = await fetch('/blog.json')

        if(res.ok){
            return {
                props: {
                    posts: await res.json()
                }
            }
        }

        return {

        }
    }
</script>
<script lang="ts">
import PostElement from "$lib/components/PostElement.svelte";

export let posts;

</script>

<h1 class="text-xl font-light">Posts</h1>
<hr class="mt-2 mb-5 border-opacity-50 border-gray-200" />

{#if posts.length <= 0}
    <h1 class="text-3xl text-center text-gray-900 text-opacity-40 p-5">No posts 😭</h1>
{:else}
    {#each posts as post}
        <PostElement post={post} />
    {/each}
{/if}

