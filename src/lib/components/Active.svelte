<script lang="ts">
	import Form from './Form.svelte';
	import MobileArtifice1 from './MobileArtificeHP1.svelte';
	import MobileArtifice2 from './MobileArtificeHP2.svelte';
</script>

<div class="text-center">
	<p class="bg-specific-brown py-2 text-h6m lg:text-h6">Du 15/12/2025 au 15/03/2026</p>
</div>
<p class="mt-2 text-center font-coffee text-h2m tracking-[1px] text-yellow uppercase lg:text-h2">
	Tentez de gagner
</p>
<p
	class="text-stroke-outside-6 mt-1.5 mb-0.5 text-center font-sirenia text-h1m text-brown uppercase lg:my-1.5 lg:text-h1"
>
	une expérience insolite
</p>
<div class="flex items-center justify-center gap-4">
	<p class="text-center font-coffee text-h3m tracking-[1px] text-white uppercase lg:text-h3">
		d'une valeur de
	</p>
	<p
		class="bg-specific-brown py-1 text-h4m before:left-[calc(-8px+1px)] before:w-2 after:right-[calc(-8px+1px)] after:w-2 lg:text-h4"
	>
		1000€
	</p>
</div>
<p
	class="text-stroke-outside-4 mt-1.5 mb-0.5 text-center font-sirenia text-h5m text-brown lg:my-1.5 lg:text-h5"
>
	à vivre à plusieurs
</p>
<p
	class="my-2 mb-6 text-center font-coffee text-h7m tracking-[0.8px] text-white uppercase lg:text-h7"
>
	sous la forme d'un e-code cadeau<br />
	valable sur le site
	<a
		href="https://www.funbooker.com/fr/"
		title="funbooker"
		class="text-yellow underline transition-colors hover:text-white"
		target="_blank">funbooker.com</a
	>*
</p>

<MobileArtifice1 />

<Form />

<div class="mt-8 mb-7 text-center lg:mt-18">
	<p class="bg-specific-brown py-2 text-h5m lg:text-h5">Pour participer :</p>
</div>
<div class="flex items-center justify-center gap-3">
	<p class="flex items-center justify-center rounded-full bg-white px-3.5 py-1">
		<span class="font-coffee text-h7m text-pink lg:text-h7">1</span>
	</p>
	<p class="font-coffee text-h7m tracking-[1px] uppercase lg:text-h7">Remplissez le formulaire</p>
</div>
<div class="mt-6 flex justify-center gap-3">
	<div>
		<p class="flex items-center justify-center rounded-full bg-white px-3.5 py-1">
			<span class="font-coffee text-h7m text-pink lg:text-h7">2</span>
		</p>
	</div>
	<p class="font-coffee text-h7m tracking-[1px] uppercase lg:text-h7">
		Téléchargez votre ticket de caisse <br />sur lequel apparaissent clairement <br />et lisiblement
		le ou les produits <br />Whaou! et Le Ster participants
	</p>
</div>
<p class="mt-8 text-center text-mention font-medium lg:mt-16">
	*Jeu avec obligation d’achat du 15/12/2025 au 15/03/2026 inclus valable en France métropolitaine
	(Corse incluse) uniquement. Sont mis en jeu 5 bons de 1000 € à valoir sur <a
		href="https://www.funbooker.com/fr/"
		title="funbooker"
		class="font-extrabold text-white underline transition-colors hover:text-yellow"
		target="_blank">funbooker.com</a
	>
	pour vivre une expérience insolite et un panier gourmand de produits Whaou! et Le Ster d’une valeur
	commerciale estimative de 15 € TTC. Voir modalités, liste des produits porteurs de l’offre dans le
	<a
		href="/reglement.pdf"
		title="Règlement du jeu"
		class="font-extrabold text-white underline transition-colors hover:text-yellow"
		target="_blank">règlement du jeu</a
	>. - Visuels non contractuels.
</p>
<MobileArtifice2 />
