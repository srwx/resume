<script lang="ts">
	export let name: string = 'Foo';
	export let nickname: string = '';
	export let phone: string = '';
	export let email: string = '';
	export let github: string = '';
	export let linkedin: string = '';
	export let location: string = '';
	export let website: string = '';
</script>

<div class="flex flex-wrap flex-col sm:flex-row print:flex-row text-sm sm:text-base print:text-xs">
	<div class="flex-1 text-left sm:py-4 w-48">
		<p><a href={`tel:${phone}`}>{phone}</a></p>
		<p><a href={`mailto:${email}`}>{email}</a></p>
		<p>{location}</p>
	</div>

	<h2
		class="flex-none order-first sm:order-none print:order-none text-3xl sm:text-xl md:text-2xl lg:text-[44px] text-center p-4"
	>
		{name}
		<span class="block mt-1 print:-mt-1 text-base lg:text-lg">({nickname})</span>
	</h2>

	<div
		class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base print:text-xs"
	>
		<p>
			<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
				>github.com/{github}</a
			>
		</p>
		<p>
			<a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
		</p>
		<p>
			<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">Linkedin</a>
		</p>
	</div>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>
