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
  ]
</script>

<footer
	class="flex items-center justify-center gap-12 bg-brown py-6 relative z-50"
>
  {#each links as link, i}
    <p
      class="relative {i !== 0 ? 'before:absolute before:top-[10%] before:-left-6 before:h-4/5 before:w-[2px] before:bg-yellow' : ''}"
    >
      <a href={link.href} class="text-p font-semibold hover:font-bold hover:underline">
        {link.title}
      </a>
    </p>
  {/each}
</footer>