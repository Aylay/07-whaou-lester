<script lang="ts">
	import MobileArtifice1 from './MobileArtifice1.svelte';
	import MobileArtifice2 from './MobileArtifice2.svelte';
</script>

<div class="text-center">
	<p class="bg-specific-brown py-2 text-h6m lg:text-h6">Du 15/12/2025 au 15/03/2026</p>
</div>
<div class="mt-5 rounded-[1.6rem] bg-yellow pt-5.5 pb-4 text-center">
	<span class="font-coffee text-h3m tracking-[1px] text-brown uppercase lg:text-h3">Le jeu de</span
	><br />
	<span
		class="text-stroke-outside-6 mt-1.5 mb-0.5 inline-block font-sirenia text-h4m text-brown lg:my-1.5 lg:text-h4"
		>la Chandeleur</span
	><br />
	<span class="font-coffee text-h3m tracking-[1px] text-pink uppercase lg:text-h3"
		>Whaou! et Le ster</span
	><br />
	<span class="font-coffee text-h3m tracking-[1px] text-brown uppercase lg:text-h3"
		>est à présent <br class="max-lg:hidden" />terminé !</span
	>
</div>
<p class="mt-2 mb-8 text-center text-p font-medium">
	Pensez à prendre connaissance de vos e-mails pour découvrir le résultat du tirage au sort.
</p>
<MobileArtifice1 />
<p class="text-center font-coffee text-h7m tracking-[1px] text-white uppercase lg:text-h7">
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
