<script>
    export let href = "";
    export let text;
</script>

<!-- rel= is required to enforce default routing when accessing static resources -->
<!-- https://kit.svelte.dev/docs#anchor-options-rel-external -->
<a
    {href}
    rel={href.includes(".") ? "external" : null}
    class="inline-block border-2 rounded-xl px-10 py-2 border-highlight 
        text-2xl text-secondary text-center 
        transition duration-200 hover:bg-background-light hover:scale-110 active:scale-90 active:bg-highlight"
    >{text}</a
>
