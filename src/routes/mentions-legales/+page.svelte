<script lang="ts">
	import Arrow from "$lib/assets/Arrow.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
</script>

<Header />

<section class="pt-3 bigContainer pb-18">
  <p class="flex">
    <a href="/" class="flex gap-4 items-center text-p" title="Retour au jeu">
      <Arrow newClass="w-5 h-auto" fill="#FECC00" />
			<span class="text-p">Retour au jeu </span>
    </a>
  </p>

  <div class="mt-12">
		<h1 class="text-h4m font-bold lg:text-h4 text-brown font-title">Mentions légales</h1>
		<div class="flex flex-col gap-12 pt-12">
			<div>
				<h2 class="pb-3 font-title2 text-h7m lg:text-h7 text-yellow font-bold uppercase tracking-[1px]">Informations légales</h2>
				<p class="text-p">
					Whaou! – Goûters Magiques<br />
					Lieu-dit Kerichelard – ZA de Kerama, CS 70116 Plumelin, France<br />
          Email : <a href="mailto:gm@gouters-magiques.com" class="underline text-yellow hover:text-white transition-colors"
						>gm@gouters-magiques.com</a><br /><br />
          SAS au capital de 1 760 380 €<br />
					SIRET : 49918578300028<br />
					RCS : Lorient 499 185 783
				</p>
			</div>
			<div>
				<h2 class="pb-3 font-title2 text-h7m lg:text-h7 text-yellow font-bold uppercase tracking-[1px]">Création du site</h2>
				<p class="text-p">
					Le site internet a été créé par <a
						href="https://beavers-agency.fr/"
						title="Beavers, l'agence digitale des castors"
						class="underline text-yellow hover:text-white transition-colors"
						target="_blank">Beavers</a
					>.
				</p>
			</div>
			<div>
				<h2 class="pb-3 font-title2 text-h7m lg:text-h7 text-yellow font-bold uppercase tracking-[1px]">
					Directeur de la publication et webmaster
				</h2>
				<p class="text-p">
					Jean-Luc Dénécé - Personne physique
				</p>
			</div>
			<div>
				<h2 class="pb-3 font-title2 text-h7m lg:text-h7 text-yellow font-bold uppercase tracking-[1px]">Hébergement</h2>
				<p class="text-p">
					Vercel Inc.<br />
					340 S Lemon Ave #4133<br />
					Walnut, CA 91789
				</p>
			</div>
		</div>
	</div>
</section>

<Footer />