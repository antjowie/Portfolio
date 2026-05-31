<script lang="ts">
    import ProjectCard from "$lib/landing/ProjectCard.svelte";
    import Button from "$lib/Button.svelte";

    let { title = "Title", projects = [{}] } = $props();

    let showMoreProjects = $state(false);
    const showLessProjectsCount = 2;
</script>

<div id="work" class="p-4 py-8">
    <h1 class="text-light-a0 py-4 font-heading text-5xl font-semibold">{title}</h1>
    {#each projects as project, i (i)}
        {#if i < showLessProjectsCount || showMoreProjects}
            <ProjectCard {...project} />
        {/if}
    {/each}

    {#if projects.length > showLessProjectsCount}
        <div>
            <div class="flex justify-center" data-aos="fade-up">
                <span
                    onclick={() => {
                        showMoreProjects = !showMoreProjects;
                    }}
                    onkeypress={() => {
                        showMoreProjects = !showMoreProjects;
                    }}
                >
                    <Button href="" text={showMoreProjects ? "Show less" : "Show more"} />
                </span>
            </div>
        </div>
    {/if}
</div>
