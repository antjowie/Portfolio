<script>
    export let href = "";
    export let text;
    export let target = "";
    export let cta = "false";
</script>

<!-- rel= is required to enforce default routing when accessing static resources -->
<!-- https://kit.svelte.dev/docs#anchor-options-rel-external -->
<a
    {href}
    rel={href.includes(".") ? "external" : null}
    class="inline-block border-2 rounded-xl px-10 py-2 border-highlight 
        text-2xl text-center 
        transition duration-200 
        {cta == "true" ? 
        "bg-highlight text-background active:bg-background active:text-secondary" : 
        "bg-background-light text-secondary active:bg-highlight"}
        hover:scale-110 active:scale-90"
    target={target}
    >{text}</a
>
