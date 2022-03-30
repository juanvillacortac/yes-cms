<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ fetch }) => {
    const res = await fetch(`/pages/leaders.json`)
    data.set(await res.json())
    return {
      props: {},
    }
  }
</script>

<script>
  import { pageData as data, preferences } from '$lib'

  import Hero from '$lib/components/blocks/Hero.svelte'
  import Image from '$lib/components/caravaggio/Image.svelte'
  import Viewport from '$lib/components/Viewport.svelte'
</script>

<svelte:head>
  <title>{$data.name} | YES Campus</title>
</svelte:head>

<div class="w-full overflow-hidden">
  <Hero />

  {#if $data.aliados && $data.aliados.length}
    <div class="mt-12 w-full" id="aliados">
      <div class="py-12 content">
        <Viewport class="overflow-hidden" oneWay>
          <h2
            class="text-center mb-2 leading-3 anim t-h2"
            style="--anim-r: 3deg; --anim-y: 100%"
          >
            Organizaciones que hacen posible el Bootcamp
          </h2>
          <p
            class="font-bold text-center text-lg pb-2 anim lg:text-2xl"
            style="transition-delay: 200ms; --anim-r: 3deg; --anim-y: 100%; color: {$data
              .theme.primary}"
          >
            {$data.name} es posible gracias a
          </p>
        </Viewport>
        <Viewport class="flex flex-wrap items-center" oneWay>
          {#each $data.aliados as c, i}
            <div
              class="flex mx-auto mt-2 p-6 w-1/2 anim lg:w-1/4"
              style="transition-delay: {50 * i + 500}ms"
            >
              <Image
                src={c.image}
                showOriginal=".svg"
                options={{
                  q: 90,
                  o: 'webp',
                }}
                alt={c.name}
                class="m-auto w-auto transform duration-200 grayscale hover:scale-110"
                style="max-height: 6rem"
              />
            </div>
          {/each}
        </Viewport>
      </div>
    </div>
  {/if}

  <Viewport class="bg-yes-gray-100 dark:bg-yes-gray-700" oneWay>
    <div
      class="flex flex-col-reverse py-16 items-center italic content t-p lg:flex-row"
    >
      <p class="w-full anim lg:w-1/2" style="--anim-x: -3rem">
        <strong>Aprendo y Emprendo - Yes Campus</strong>, como organización
        cuidan el equilibrio en la conformación de sus equipos de trabajo y
        participantes en sus actividades, por lo tanto se asegura la
        participación equitativa entre hombres y mujeres en cada una de las
        fases del programa Young Leaders, tanto en la selección de speaker,
        facilitadores y participantes beneficiarios del programa.
      </p>
      <div
        class="flex w-full pb-16 anim justify-center lg:pb-0 lg:pl-16 lg:w-1/2"
        style="--anim-x: 3rem"
      >
        <img
          src="/images/logo{$preferences.darkMode ? '-white' : ''}.svg"
          alt=""
          class="w-72"
        />
      </div>
    </div>
  </Viewport>
</div>

<style global>
  .grayscale {
    --filter-gray: 100%;
    filter: grayscale(var(--filter-gray)) drop-shadow(1px 1px 0 white)
      drop-shadow(-1px 1px 0 white) drop-shadow(1px -1px 0 white)
      drop-shadow(-1px -1px 0 white);
  }

  .grayscale:hover {
    --filter-gray: 0%;
  }
</style>
