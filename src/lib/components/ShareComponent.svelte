<script lang="ts">
    import blogInfo from "$lib/constants/blogInfo";

    export let slug = ''
    
    let copied = false;

    async function onCopyShareLink() {
        console.log(`${blogInfo.BLOG_URL}/${slug}`)

        await navigator.clipboard.writeText(`${blogInfo.BLOG_URL}/${slug}`)

        copied = true;

        setTimeout(() => {
            copied = false
        }, 500)
    }
</script>


<button on:click={onCopyShareLink} 
    class="px-2 py-1 bg-gray-800 text-white hover:bg-gray-600 active:bg-gray-500
        transition ease-in-out 
        {copied && 'scale-110 '}">
    🔗 Copy Link
</button>