<script lang="ts">
    import '$lib/styles/app.css';

    import blogInfo from '$lib/constants/blogInfo';
</script>

<div class="w-full flex justify-center border ">
    <div class="flex flex-col lg:flex-row justify-between items-center py-5 w-full lg:w-1/2">
        <div class="text-2xl font-bold">
            <a href="/">{blogInfo.BLOG_NAME}</a>
        </div>
    
        <div class="">
            <ul class="list-none flex justify-center gap-3 text-lg font-medium">
                <li class="p-1">
                    <a href="https://github.com/chiuzon" class=" text-gray-800 hover:text-gray-400">
                        <span class="text-xs lg:text-lg align-top">📦</span> Github</a>
                </li>
                <li class="p-1">
                    <a href="https://twitter.com/chiuzon" class=" text-gray-800 hover:text-gray-400">
                        <span class="text-xs lg:text-lg align-top">💬</span> Twitter</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="container mx-auto lg:mx-16  xl:mx-36 2xl:mx-56 p-10">
    <slot />
</div>