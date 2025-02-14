<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { emoticons } from "./sample-data.ts";

</script>

<div>Emoticons</div>
<div class="flex w-auto gap-4">
	{#each emoticons as item}
		<Button
			class="border p-2"
			onclick={() =>
				navigator.clipboard
					.writeText(item)
					.then(() => {
						console.log('Copied to clipboard!');
					})
					.catch((err) => {
						console.error('Failed to copy: ', err);
					})}
		>
			{item}
		</Button>
	{/each}
</div>
