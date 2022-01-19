<script lang="ts">
    export let pageName = ''
    export let description = 'A blog about tech'
    export let keywords = 'chiuzon-blog'

    $: keywordsMeta = keywords.split("-").toLocaleString()
</script>

<svelte:head>
    <title>{pageName} / chiuzon</title>
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywordsMeta}">
    <meta name="author" content="Chiuzon">
</svelte:head>