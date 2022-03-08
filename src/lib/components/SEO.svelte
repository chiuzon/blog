<script lang="ts">
	import blogInfo from '$lib/constants/blogInfo';

	export let pageName = '';
	export let description = 'A blog about tech';
	export let keywords = 'chiuzon-blog';

	$: keywordsMeta = keywords.split('-').toLocaleString();
</script>

<svelte:head>
	<title>{pageName} / {blogInfo.BLOG_NAME}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywordsMeta} />
</svelte:head>
