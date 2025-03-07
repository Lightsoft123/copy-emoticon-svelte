<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	let emailOrUserName = $state();
	let password: string | undefined = $state();
</script>

<form method="POST" action="?/login" enctype="multipart/form-data">
	<Button onclick={() => history.back()}>back</Button>
	<Button onclick={() => goto('/register')}>Register</Button>
	<Label for="username">Username/E-mail</Label>
	<Input
		id="username"
		name="username"
		bind:value={emailOrUserName}
		placeholder="Username or E-mail"
		required
	/>
	<Label for="password">Password</Label>
	<Input id="password" name="password" bind:value={password} type="password" required />
	<Button type="submit">Submit</Button>
</form>
