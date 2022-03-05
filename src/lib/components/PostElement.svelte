<script lang="ts">
    export let post;

    $: date = new Date(post.metadata.date).toString().substring(0, 16) || '...'
    $: title = post.metadata.title || '...'
    $: description = post.metadata.description || ''
    $: slug = post.metadata.slug || ''

</script>

{#if post.metadata}
    <div class="border rounded-md p-2 break-words hover:shadow-md lg:w-1/2">
        <div class="text-xl font-semibold">
            {title}
        </div>
        <div class="text-md">
            {date}
        </div>

        <div class="border rounded-sm p-1 select-none mt-2 text-gray-900 text-opacity-80">
            {description}
        </div>

        <div class="flex w-full justify-end py-1">
            <a href="/{slug}" class="text-lg px-2 hover:bg-gray-800 hover:text-white"><span class="mx-1">👁️‍🗨️</span>Read</a>
        </div>
    </div>
{/if}


