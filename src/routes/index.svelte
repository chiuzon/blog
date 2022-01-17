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
export let posts;

console.log(posts)
</script>

<h1>Posts</h1>


{#each posts as post}
  <div>{post.metadata.title}</div>
{/each}

