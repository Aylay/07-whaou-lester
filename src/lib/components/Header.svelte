<script lang="ts">
	import LeSter from "$lib/assets/LeSter.svelte";
	import Logo from "$lib/assets/Logo.svelte";
	import Waves from "$lib/assets/Waves.svelte";
	import Whaou from "$lib/assets/Whaou.svelte";
</script>

<header class="bg-brown flex justify-center pt-12 relative gap-37 items-start">
  <Whaou newClass="w-50 h-auto relative z-10" />
  <Logo newClass="w-80 h-auto relative z-10" />
  <LeSter newClass="w-50 h-auto relative z-10" />
  <Waves newClass="w-full h-auto absolute -bottom-px z-0" />
</header>