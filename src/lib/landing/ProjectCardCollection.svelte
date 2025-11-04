<script>
    import ProjectCard from "$lib/landing/ProjectCard.svelte";
    import Button from "$lib/Button.svelte";
    
    export let data = {
        title: "Title",
        description: "Description.",
        projects: [{
        }]
    }

    let showMoreProjects = false;
    const showLessProjectsCount = 2;
</script>

<div id="work" class="p-4 py-8">
    <h1 class="py-4 font-bold font-heading text-5xl text-secondary">{data.title}</h1>
    <p class="text-lg">{@html data.description}</p>
    {#each data.projects as project, i}
        {#if i < showLessProjectsCount || showMoreProjects}
            <ProjectCard {...project} />
        {/if}
    {/each}

    {#if data.projects.length > showLessProjectsCount}
    <div
        on:click|preventDefault={() => {
            showMoreProjects = !showMoreProjects;
        }}
        on:keypress|preventDefault={() => {
            showMoreProjects = !showMoreProjects;
        }}
    >
        <div class="flex justify-center">
            <Button href="" text={showMoreProjects ? "Show less" : "Show more"} />
        </div>
    </div>
    {/if}
</div>
