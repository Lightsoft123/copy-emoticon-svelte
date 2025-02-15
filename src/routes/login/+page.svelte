<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	let emailOrUserName = $state();
	let password: string | undefined = $state();
	let savePassword: string | undefined = $state();
</script>

<form
	method="POST"
	action="?/login"
	enctype="multipart/form-data"
	onsubmit={async () => {
		savePassword = password;
		const encoder = new TextEncoder();
		const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(password));
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		password = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
	}}
	onerror={async () => {
		password = savePassword;
	}}
>
	<Label>Username/E-mail</Label>
	<Input name="username" bind:value={emailOrUserName} placeholder="Username or E-mail" />
	<Label>Password</Label>
	<Input name="password" bind:value={password} type="password" />
	<Button type="submit">Submit</Button>
</form>
