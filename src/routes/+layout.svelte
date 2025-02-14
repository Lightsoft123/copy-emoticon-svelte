<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.pcss';
	let { children } = $props();
</script>

<Toaster
	toastOptions={{
		classes: {
			success: 'bg-green-300',
			error: 'bg-destructive'
		}
	}}
/>
{@render children?.()}
