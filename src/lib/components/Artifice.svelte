<script lang="ts">
	import Balloon from "$lib/assets/Balloon.svelte";
	import Plane from "$lib/assets/Plane.svelte";
	import Smiley from "$lib/assets/Smiley.svelte";


</script>

<section class="fixed inset-x-0 bottom-0 z-0">
  <div class="bigContainer flex gap-6">
    <div class="flex-1 relative">
      <img src="/img/crepes1.webp" class="w-full h-auto">
      <Plane newClass="rotate-[14.31deg] w-[36.5%] right-[10%] bottom-[88%] absolute" />
    </div>
    <p class="flex-1">&nbsp;</p>
     <div class="flex-1 relative">
      <img src="/img/girafe1.webp" class="w-full h-auto">
      <Balloon newClass="rotate-[-29.37deg] w-[27.3%] right-[10%] bottom-[17%] absolute" />
    </div>
  </div>
</section>

<section class="fixed inset-x-0 bottom-[45dvh] z-0">
  <div class="bigContainer flex gap-6">
    <div class="flex-1">
      <img src="/img/pancake1.webp" class="w-full h-auto">
    </div>
    <p class="flex-1">&nbsp;</p>
    <p class="flex-1">&nbsp;</p>
  </div>
</section>

<section class="fixed inset-x-0 bottom-[30.5dvh] z-0">
  <div class="bigContainer flex gap-6">
    <p class="flex-1">&nbsp;</p>
    <p class="flex-1">&nbsp;</p>
    <div class="flex-1 relative">
      <img src="/img/crepes2.webp" class="w-full h-auto">
      <Smiley newClass="w-[25%] left-[6.5%] bottom-[7.8%] absolute" />
    </div>
  </div>
</section>