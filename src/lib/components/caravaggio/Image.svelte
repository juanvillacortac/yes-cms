<script lang="ts">
  import type { CaravaggioOptions } from './urlBuilder'
  import { useCaravaggio } from './useCaravaggio'

  export let src: string
  export let options: CaravaggioOptions
  export let showOriginal: string = null

  $: url = src.endsWith(showOriginal) ? src : useCaravaggio(src, options)
</script>

<img src={url} alt={$$props.alt} {...$$restProps} />
