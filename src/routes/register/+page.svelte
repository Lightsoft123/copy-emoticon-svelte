<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Icons from '$lib/components/ui/icons/index.ts';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	let name: string | undefined = $state();
	let username: string | undefined = $state();
	let email: string | undefined = $state();
	let password: string | undefined = $state();
</script>

<form method="POST" action="?/register" enctype="multipart/form-data" class="grid gap-2">
	<Button variant="ghost" class="size-8" onclick={() => history.back()}>
		<Icons.arrowLeft class="size-8" />
	</Button>
	<Label for="name">Name</Label>
	<Input id="name" name="name" bind:value={name} placeholder="name" />
	<Label for="username">Username</Label>
	<Input id="username" name="username" bind:value={username} placeholder="Username" />
	<Label for="email">E-mail</Label>
	<Input id="email" name="email" type="email" bind:value={email} placeholder="E-mail" />
	<Label for="password">Password</Label>
	<Input id="password" name="password" bind:value={password} type="password" />
	<Button type="submit">Submit</Button>
</form>
