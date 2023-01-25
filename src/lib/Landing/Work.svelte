<script>
    import ProjectCard from "$lib/Landing/ProjectCard.svelte";
    import Button from "$lib/Button.svelte";

    const projects = [
        {
            href: "https://store.steampowered.com/app/1491650/Last_Resort/",
            src: "projects/shoot/title.jpg",
            title: "Last Resort",
            summary: "32 weeks - 30 developers - UE4",
            text:
                "A 4 player co-op first person shooter. Hunt down hordes of aliens on the first extrarerrestrial resort",
            tasks: [
                "Profiling and optimizing network quality",
                "Integrating netcode with Steam",
                "Setting up first- and third person weapon based character animations",
                "Multiplayer supported level streaming for a seamless game loop",
            ],
        },
        {
            href: "https://buas.itch.io/temple-of-giants",
            src: "projects/tog/title.png",
            title: "Temple of Giants",
            summary: "8 weeks - 16 developers - UE4",
            text: "A third person platformer set in Ancient Greece",
            tasks: [
                "Implemented player abilities",
                "Implemented the saving and checkpoint system",
                "Implemented controller support (UI changes dynamically based on input)",
                "In game feedback system that forwards feedback to our Discord (or any webhook)",
            ],
        },
        {
            href: "https://github.com/antjowie/Aphelion-engine",
            src: "projects/aphelion/title.png",
            title: "Aphelion Engine",
            summary: "2020 - on hold - Multiplatform game engine",
            text: "The engine that powers VoxelCraft, a multiplayer minecraft clone",
            tasks: [
                "Uses CMake and interfaces to support platform specific implementations",
                "2D and 3D renderer API built with OpenGL 4.5",
                "Physics API built upon NVIDIA PhysX",
                "Network system build with ENet and Bitsery. Integrates with the Gameplay API to update marked components",
            ],
        },
        {
            href: "https://github.com/antjowie/Ray-tracer",
            src: "projects/ray-tracer/title.png",
            title: "Ray Tracer",
            summary: "2020 - 2 weeks - workshop by Jacco Bikker",
            text:
                "This CPU ray tracer is the product of a 2 week Masterclass given by Jacco Bikker",
            tasks: [
                "14 triangles with a resolution of 512x512 runs at 130 fps",
                "Ray and path tracer branch",
                "Multi-threaded",
                "Anti-aliasing support",
                "Soft shadows and depth of field",
            ],
        },
        {
            href: "https://github.com/antjowie/empires",
            src: "projects/empires/title.png",
            title: "Empires",
            summary: "2018 - 8 weeks - BUas Y2B project",
            text: "An RTS game in which you colonize the galaxy, made for the Raspberry PI",
            tasks: [
                "Compiled on the Raspberry Pi 3 with Visual Studio",
                "Graphics uses GLES 2, supports models and text",
                "Generated galaxy and planets",
                "Different vessel types with a TSP implementation to navigate",
                "An AI to play against",
            ],
        },
        {
            href: "https://github.com/antjowie/Ray-Shaper",
            src: "projects/ray-shaper/title.png",
            title: "Ray Shaper",
            summary: "2018 - 8 weeks - BUas Y2B project",
            text: "A puzzle game in which you reflect lasers to open the gate",
            tasks: [
                "Puzzles based around moving reflectors and reflecting light in all directions",
                "Tiled importer to create the map",
                "Progress is saved",
                "Options menu, configurable key bindings and audio",
            ],
        },
    ];

    let showMoreProjects = false;
</script>

<div id="work" class="p-4 py-8">
    <h1 class="py-4 font-bold font-heading text-5xl text-secondary">Project's I've worked on</h1>
    <p class="text-lg">
        Highlights of projects I've worked on. <span class="font-bold">Click</span> to read more about
        it.
    </p>
    {#each projects as project, i}
        {#if i < 2 || showMoreProjects}
            <ProjectCard {...project} />
        {/if}
    {/each}

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
</div>
