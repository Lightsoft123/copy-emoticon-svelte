<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { toast } from 'svelte-sonner';
	import type { PageData } from './$types.ts';

	let { data }: { data: PageData } = $props();
	let addEmoticon: string | undefined = $state();

	let emotes = $state(data.emoticons);
</script>

<Button onclick={() => goto(`${page.url.host}/login`)}>Login</Button>
<div>Create Emoticons</div>
<Input bind:value={addEmoticon} />
<Button
	onclick={() => (
		!emotes.find((val) => val === addEmoticon)
			? emotes.push(addEmoticon ?? '')
			: toast.warning('Emotes already exists', { position: 'top-center', dismissable: true }),
		(addEmoticon = undefined)
	)}
	disabled={!addEmoticon}
>
	Add Emoticon
</Button>
<div class="mt-2">Emoticons</div>
<div class="flex w-auto gap-4">
	{#key emotes}
		{#each emotes as item}
			<Button
				class="border bg-pink-200 p-2 text-foreground"
				onclick={() =>
					navigator.clipboard
						.writeText(item)
						.then(() => {
							toast.success('Copied to clipboard!', {
								position: 'top-center',
								dismissable: true
							});
						})
						.catch((err) => {
							toast.error('Failed to copy: ', err);
						})}
			>
				{item}
			</Button>
		{/each}
	{/key}
</div>
