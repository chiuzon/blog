<script lang="ts">
	import '$lib/styles/app.css';

	let dropdownStatus = false;
</script>

<div class="flex min-h-screen ">
	<div
		class=" bg-dark w-60 h-screen flex flex-col items-stretch p-2 border-r border-r-fg overflow-y-auto "
	>
		<h1 class="font-extrabold text-3xl break-words text-fg">Promotheus</h1>

		<div class="py-5">
			<ul class="w-full flex flex-col gap-1">
				<li class="w-full flex flex-col items-stretch">
					<a href="/" class="text-fg py-1 px-1 text-2xl  hover:border-fg hover:border-l-4"
						>00. Home</a
					>
				</li>
			</ul>
		</div>
	</div>

	<div class="bg-dark flex-1 p-2 w-full h-full overflow-y-">
		<slot />
	</div>
</div>
