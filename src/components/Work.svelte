<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let position: string = '';
	export let company: string = '';
	export let url: string = '';
	export let years: string[] = [];
	export let details: string[] = [];
</script>

<div class="work-experience">
	<Hideable>
		<div class="flex font-bold mb-2 print:mb-1 flex-col justify-start gap-y-1 sm:flex-row">
			<div class="flex-1 text-left">
				<a href={url} target="_blank" rel="noreferrer">{company}</a>
			</div>
			<div class="text-left sm:text-center">{position}</div>
			<div class="text-left sm:flex-1 sm:text-right">{years.join('-')}</div>
		</div>
		<ul class="text-left list-disc pl-8 print:pl-6 space-y-1">
			{#each details as detail}
				<Hideable>
					<li>
						{detail}
					</li>
				</Hideable>
			{/each}
		</ul>
	</Hideable>
</div>

<style lang="postcss">
	.work-experience {
		@apply my-4;
	}

	a {
		text-decoration: underline;
	}

	@media print {
		.work-experience {
			@apply my-1;
		}
	}
</style>
