<script lang="ts">
    import Icon from "@iconify/svelte";

    let { href, icon, name = "", size = "text-6xl" } = $props();
</script>

<div class="transition hover:scale-110">
    <a
        {href}
        target="_blank"
        rel="noreferrer"
        class="{size} text-primary hover:text-highlight flex items-center
        gap-1 text-primary-a50 transition active:scale-75"
    >
        <div>
            <Icon {icon} />
        </div>
        <p class="text-base capitalize">{name}</p>
    </a>
</div>
