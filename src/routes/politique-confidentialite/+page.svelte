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
		<h1 class="text-h4m lg:text-h4 text-brown font-sirenia text-stroke-outside-6">Politique de confidentialité</h1>
		<div class="flex flex-col gap-12 pt-12">
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">1 - Informations légales</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Ce document a pour objectif de donner les informations relatives au traitement des données du jeu avec obligation d’achat intitulé « Goûtez la Chandeleur » proposée sur le site internet www.jeu-chandeleur-lester-whaou.fr édité par la société GOÛTERS MAGIQUES, ci-après désignée la « Société Organisatrice ».
					</p>
					<p class="text-p">
						La Société Organisatrice est amenée à récolter des données personnelles dont la nature et la finalité sont décrites dans ce document.
					</p>
					<p class="text-p">
						Les termes « vous » et « vos /votre » se rapportent à tous les utilisateurs du site internet www.jeu-chandeleur-lester-whaou.fr, ci-après désigné « le Jeu ».
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">2 - Données collectées</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Les données personnelles collectées pour le Jeu :<br />
						Pour les participants : « Nom » ; « Prénom » ; « Adresse email »<br />
						Pour les gagnants : « Nom » ; « Prénom » ; « Adresse email » ; « Adresse postale »
					</p>
					<p class="text-p">
Ces données concernent votre identité, vos coordonnées, pour répondre à vos demandes, et pour envoyer votre dotation en cas de gain.
					</p>
					<p class="text-p">
Le caractère obligatoire ou facultatif des données que vous renseignez est signalé lors de la collecte. Renseigner certaines données est obligatoire seulement lorsque cela est nécessaire à la Société Organisatrice pour traiter votre participation.

					</p>
					<p class="text-p">
La Société Organisatrice veille à ne collecter et ne traiter que des données strictement nécessaires aux finalités des traitements mis en œuvre.

					</p>
					<p class="text-p">
La Société Organisatrice ne demande jamais d’informations dites sensibles (informations raciales ou ethniques, opinions politiques, opinions religieuses ou philosophiques, appartenance syndicale, santé, orientation sexuelle) et vous déconseille de renseigner de telles données. Cependant, si vous choisissez d’inclure dans les zones de commentaires libres ou dans les e-mails que vous nous adressez des informations dites sensibles, elles seront transmises, telles quelles, sous votre seule responsabilité et à votre seule initiative, à nos services ou partenaires pour traiter votre demande.

					</p>
					<p class="text-p">
Vos données personnelles peuvent être collectées indirectement par l’intermédiaire de traceurs (exemple cookies) installés sur votre équipement : pour en savoir plus, référez-vous à la politique de traçage (Article 10 de notre politique de confidentialité).

					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
					3 – DROIT RELATIFS AUX DONNÉES PERSONNELLES 
				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						La société Goûters Magiques est impliquée dans la protection des données personnelles et s’engage à assurer le meilleur niveau de protection des données personnelles en conformité avec la loi Informatique et Libertés et la réglementation européenne relative à la protection des données personnelles (RGPD). Vous avez le droit d’accès, d’interrogation, d’opposition, de rectification et de suppression sur les données personnelles qui sont collectées et traitées par la Société Organisatrice. Vous avez également un droit à la portabilité relatif à l’ensemble des données vous concernant, ainsi qu’un droit à la limitation des traitements utilisant vos données personnelles. Vous avez également le droit de ne pas faire l’objet d’une prise de décision individuelle exclusivement fondée sur un traitement automatisé tel que le profilage. Si vous avez consenti au traitement de données personnelles vous pouvez retirer votre consentement à tout moment. Vous disposez également du droit de définir des directives relatives au sort de vos données personnelles après votre mort.

					</p>
					<p class="text-p">
						Vous pouvez faire valoir ces droits notamment auprès du Délégué à la Protection des Données désigné sur ce document.

					</p>
					<p class="text-p">
						Vous disposez également du droit de déposer une réclamation auprès de la CNIL via le site https://www.cnil.fr.

					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
					4 – DÉLÉGUÉ.E À LA PROTECTION DES DONNÉES
				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Toute question relative au traitement de vos données personnelles et toute demande liée à l’exercice de vos droits peut être effectuée auprès de la personne désignée Déléguée à la Protection des Données :<br />
						Responsable : Cabinet Veyan<br />
						Adresse email : dpo@gouters-magiques.com
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
					5 – DESTINATAIRE ET EXPLOITATION DES DONNÉES PERSONNELLES 
				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Les destinataires des données personnelles collectées sont les personnes identifiées et habilitées à traiter votre participation (centre de gestion, SAV …) et les prestataires explicitement identifiés pour l’accompagner dans le traitement de ces données, et sont ainsi les seuls exploitants.
					</p>
					<p class="text-p">
						Néanmoins, ces données peuvent être accessibles par d’autres prestataires ou intermédiaires, notamment l’Hébergeur, dans le cadre du stockage, de la sauvegarde et de la transmission.
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
					6 – TRAITEMENT DES DONNÉES PERSONNELLES 

				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Les données personnelles ainsi collectées sont traitées par la Société Organisatrice en tant que responsable du traitement. Ces données ne sont conservées et utilisées qu’aux seules fins d’organisation et d’administration du Jeu.
					</p>
					<p class="text-p">
						Ces données seront conservées uniquement pendant 1 an à compter de la fin du Jeu pour les seuls besoins du Jeu et ne seront pas utilisées à d’autres fins.  
					</p>
					<p class="text-p">
						A l’issue de la durée de conservation susvisée, la Société Organisatrice procèdera à l’effacement définitif des données encore en sa possession.  
					</p>
					<p class="text-p">
						En validant les formulaires présents sur le Jeu, vous consentez à l’utilisation qui est faite des données explicitement collectées telle que décrite dans ce document, sur les formulaires ou découlant naturellement desdits formulaires.
					</p>
					<p class="text-p">
						Mesure d’audience — Les données servant à la mesure d’audience sont à la destination de l’Éditeur et de ses partenaires désignés aux fins d’amélioration du Jeu, et sont conservées pendant une durée maximum de 12 mois.
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
				7 – BASES LÉGALES DU TRAITEMENT DES DONNÉES PERSONNELLES 


				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Selon la finalité pour laquelle vos données personnelles sont utilisées, la base juridique sur laquelle repose le traitement peut être :<br />
						le consentement ;<br />
						l’intérêt légitime de l’Editeur qui peut consister en :<br />
						la prévention de la fraude,<br />
						la sécurisation des outils (assurer la protection et la sécurité des données, veiller à ce qu’ils fonctionnent correctement et soient améliorés en permanence)
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
				8 – SÉCURITÉ
				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						L’Editeur assure la sécurité et la confidentialité de vos données à caractère personnel en mettant en place une protection des données renforcée par l’utilisation de moyens de sécurisation physiques et logiques (restriction d’accès au serveur).
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
				9 – MISE À JOUR DE LA POLITIQUE DE CONFIDENTIALITÉ 
				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						La politique de confidentialité est susceptible d’être modifiée ou aménagée à tout moment. En cas de modification, la nouvelle politique de confidentialité sera disponible sur le site.
					</p>
				</div>
			</div>
			<div>
				<h2 class="pb-3 font-coffee text-h7m lg:text-h7 text-yellow uppercase tracking-[1px]">
				10 – UTILISATION DES COOKIES ET DONNÉES DE TRAÇAGE
				</h2>
				<div class="flex flex-col gap-2">
					<p class="text-p">
						Un cookie est un petit fichier texte de données ou un élément d’information pouvant être enregistré sur votre ordinateur et qu’un site peut envoyer à votre navigateur pour être enregistré sur votre ordinateur sous forme de tag, repérant votre ordinateur sans indiquer votre nom. Ce n’est ni un programme exécutable, ni un virus. Un fichier de cookie contient des informations telles que votre identifiant, ainsi que des informations sur votre parcours sur le Site.
					</p>
					<p class="text-p">
						Les cookies permettent aux sites de reconnaitre votre navigateur, lequel les conservera pendant une certaine durée et le renverra au serveur web chaque fois que vous vous y reconnecterez. Ils sont en général utilisés pour conserver les informations liées à votre participation. 
					</p>
					<p class="text-p">
						Un cookie ne peut ni lire les informations sur votre disque dur, ni lire les autres fichiers de cookies créés par d’autres sites.
					</p>
					<p class="text-p">
						Le Jeu utilise des technologies permettant de suivre les visites (cookies, stockage local, etc.). Ce suivi a pour vocation de :<br />
						conserver la connexion d’un utilisateur ou d’une utilisatrice du Jeu dans le cadre d’un accès sécurisé ;<br />
						mesurer de manière anonyme l’audience à des fins exclusives de suivi de performances et d’amélioration du Jeu ;<br />
						mesurer l’impact et améliorer l’efficacité de campagnes publicitaires ou d’opérations commerciales
					</p>
					<p class="text-p">
						En dehors des fonctionnalités assurant le bon fonctionnement du Jeu ou son amélioration, vous pouvez consentir ou non au suivi de vos visites et à l’utilisation de vos données de navigation. Ce choix vous est donné par un formulaire, et vous pouvez revenir à tout moment sur votre décision. La durée de conservation de votre consentement n’excède pas 12 mois.
					</p>
					<p class="text-p">
						Vous pouvez refuser les cookies, ou être informé lorsqu’un site veut écrire un cookie en réglant les préférences de votre navigateur.
					</p>
					<p class="text-p">
						Vous pouvez aussi refuser un cookie par l’intermédiaire de votre logiciel de navigation ou de votre terminal.

					</p>
					<p class="text-p">
						Votre navigateur peut être paramétré pour vous signaler les cookies qui sont déposés dans votre terminal et vous demander de les accepter ou pas, au cas par cas ou bien les refuser systématiquement une fois pour toutes.

					</p>
					<p class="text-p">
						Vous pouvez à tout moment choisir de désactiver tout ou partie des cookies. Votre navigateur peut également être paramétré pour vous signaler les cookies déposés dans votre terminal et vous demander de les accepter ou non (au cas par cas ou en totalité). Nous vous invitons à consulter les paramètres de chacun des navigateurs pour activer/désactiver les cookies

					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />