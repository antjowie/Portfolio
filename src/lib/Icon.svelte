<script>
    import Icon from "@iconify/svelte";

    export let href;
    export let icon;
    export let name = "";

    export let size = "text-6xl";
</script>

<div class="transition hover:scale-110">
    <a
        {href}
        target="_blank"
        class="{size} hover-line text-primary flex items-center gap-1 transition hover:text-highlight active:scale-75"
    >
        <div>
            <Icon icon="mdi:{icon}" />
        </div>
        <p class="capitalize text-base">{name}</p>
    </a>
</div>
