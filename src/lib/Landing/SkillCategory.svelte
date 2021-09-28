<script>
    import Icon from "$lib/Icon.svelte";

    export let category;
    export let icons;
</script>

<div>
    <h2 class="text-xl text-highlight pt-4">{category}</h2>
    <div class="flex gap-2 w-32">
        {#each icons as icon}
            <!-- <Icon href={icon.href} icon={icon.icon} name={icon.name ? icon.name : icon.icon} /> -->
            <Icon href={icon.href} icon={icon.icon} />
        {/each}
    </div>
</div>
