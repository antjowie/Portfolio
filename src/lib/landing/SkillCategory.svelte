<script lang="ts">
    import Icon from "$lib/Icon.svelte";

    let { category, icons } = $props();
</script>

<div>
    <h2 class="text-highlight pt-4 text-xl">{category}</h2>
    <div class="flex w-32 gap-2">
        {#each icons as icon (icon)}
            <!-- <Icon href={icon.href} icon={icon.icon} name={icon.name ? icon.name : icon.icon} /> -->
            <Icon href={icon.href} icon={icon.icon} />
        {/each}
    </div>
</div>
