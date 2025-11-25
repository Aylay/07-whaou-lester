<script lang="ts">
	import MobileArtifice1 from './MobileArtifice1.svelte';
	import MobileArtifice2 from './MobileArtifice2.svelte';
</script>

<div class="text-center">
	<p class="bg-specific-brown text-h6m lg:text-h6 py-2">Du 15/12/2025 au 15/03/2026</p>
</div>
<div class="bg-yellow mt-5 rounded-[1.6rem] pt-5.5 pb-4 text-center">
	<span class="text-h3m lg:text-h3 text-brown font-coffee tracking-[1px] uppercase">Le jeu de</span
	><br />
	<span
		class="text-h4m lg:text-h4 text-brown font-sirenia text-stroke-outside-6 mt-1.5 mb-0.5 inline-block lg:my-1.5"
		>la Chandeleur</span
	><br />
	<span class="text-h3m lg:text-h3 text-pink font-coffee tracking-[1px] uppercase"
		>Whaou! et Le ster</span
	><br />
	<span class="text-h3m lg:text-h3 text-brown font-coffee tracking-[1px] uppercase"
		>est à présent <br class="max-lg:hidden" />terminé !</span
	>
</div>
<p class="text-p mt-2 mb-8 text-center font-medium">
	Pensez à prendre connaissance de vos e-mails pour découvrir le résultat du tirage au sort.
</p>
<MobileArtifice1 />
<p class="text-h7m lg:text-h7 font-coffee text-center tracking-[1px] text-white uppercase">
	En attendant, découvrez <br />
	toutes nos gourmandises sur <br /><a
		href="https://www.lesterlepatissier.com/"
		title="Le Ster"
		class="text-yellow underline transition-colors hover:text-white"
		target="_blank">lesterlepatissier.com</a
	>
	et
	<a
		href="https://whaou.com/"
		title="Whaou!"
		class="text-yellow underline transition-colors hover:text-white"
		target="_blank">whaou.com</a
	>.
</p>
<MobileArtifice2 />
