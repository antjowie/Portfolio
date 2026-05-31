<script lang="ts">
    let { href = "", text, target = "", cta = false } = $props();
</script>

<!-- rel= is required to enforce default routing when accessing static resources -->
<!-- https://kit.svelte.dev/docs#anchor-options-rel-external -->
<a
    href={href.length > 0 ? href : null}
    rel={href.includes(".") ? "external" : null}
    class="inline-block cursor-pointer rounded-xl px-10
        py-2
        text-center
        text-2xl no-underline
        transition duration-200
        {cta
        ? 'bg-primary-a0 text-dark-a0 hover:bg-primary-a10'
        : 'text-light-a110 bg-surface-a10 font-semibold hover:bg-surface-a30 hover:text-light-a0'}
        hover:scale-110 active:scale-90"
    {target}>{text}</a
>
