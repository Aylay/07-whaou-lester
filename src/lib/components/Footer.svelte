<script lang="ts">
	const links = [
		{
			title: 'Mentions légales',
			href: '/mentions-legales',
			blank: false
		},
		{
			title: 'Règlement du jeu',
			href: '/reglement.pdf',
			blank: true
		},
		{
			title: 'Politique de confidentialité',
			href: '/politique-confidentialite',
			blank: false
		}
	];
</script>

<footer
	class="bg-brown relative z-50 flex items-center justify-center gap-x-12 py-6 max-lg:flex-wrap max-lg:gap-y-2"
>
	{#each links as link, i (i)}
		<p
			class="relative {i !== 0
				? 'before:bg-yellow before:absolute before:top-[10%] before:-left-6 before:h-4/5 before:w-[2px]'
				: ''}"
		>
			<a href={link.href} class="text-p font-semibold hover:font-bold hover:underline">
				{link.title}
			</a>
		</p>
	{/each}
</footer>
