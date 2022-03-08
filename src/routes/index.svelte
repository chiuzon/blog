<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch('/blog.json');

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {};
	}
</script>

<script lang="ts">
	import PostElement from '$lib/components/PostElement.svelte';
	import Seo from '$lib/components/SEO.svelte';

	export let posts;
</script>

<Seo pageName="Home" />

<h1 class="text-xl font-light">Posts</h1>
<hr class="mt-2 mb-5 border-opacity-50 border-fg" />

{#if posts.length <= 0}
	<h1 class="text-3xl text-center text-gray-900 text-opacity-40 p-5">No posts 😭</h1>
{:else}
	<div class="gap-2 flex flex-col">
		{#each posts as post}
			<PostElement {post} />
		{/each}
	</div>
{/if}
