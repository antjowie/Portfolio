<script>
    import Navigation from "$lib/Navigation.svelte";
    import Hero from "$lib/landing/Hero.svelte";
    import About from "$lib/landing/About.svelte";
    import ProjectCardCollection from "$lib/landing/ProjectCardCollection.svelte";
    import Experiences from "$lib/landing/Experiences.svelte";
    import Skills from "$lib/landing/Skills.svelte";
    
    const workData = {
        title: "Projects I've worked on",
        description: `Highlights of projects I've worked on. <span class="font-bold">Click</span> to read more about it.`,
        projects: [
            {
               href: "https://www.lordsofthefallen.com/news/lords-of-the-fallen-2-announcement/",
               src: "projects/lotf2/title.jpg",
               title: "Lords of The Fallen II",
               summary: "UE5 - Enemies Team Developer",
               text:
                   "A dark fantasy RPG released as a sequel/reboot of the 2014 original. It tells the story of a fabled Dark Crusaders who must embark on an epic quest to overthrow Adyr, the demon God.",
               tasks: [
                   "Drive code implementation on enemy and boss features",
                   "Assess and improve cross discpline workflows by custom tooling",
                   "Optimize to remain within performance and networking targets",
                   "Heavy focus on animation for enemies and bosses",
               ],
           },
           {
               href: "https://store.steampowered.com/app/1924490/Gigantic_Rampage_Edition",
               src: "projects/gigantic/title.jpg",
               title: "Gigantic: Rampage Edition",
               summary: "UE3 - (Lead) Core Developer",
               text:
                   "A 5v5 MOBA Hero Shooter. Take down the opposing team's mighty Guardian, all while protecting your own.",
               tasks: [
                   "Core team lead programmer during release phase",
                   "New heroes and gameplay systems (challenges, grade, rush, AI and much more)",
                   "Tools to speed up iteration times (localization, UI)",
                   "Tutorials and a ton of UI additions and changes",
               ],
           },
           {
               href: "https://store.steampowered.com/app/1491650/Last_Resort/",
               src: "projects/shoot/title.jpg",
               title: "Last Resort",
               summary: "UE4 - Network Developer - 32 weeks",
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
               summary: "UE4 - Gameplay Developer - 8 weeks",
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
        ]
    };
    
    const blogData = {        
        title: "My Blog",
        description: "Some stories to share.",
        projects: [
            {
                href: "/greed-station-devlog",
                src: "blog/greed-station-devlog/title.png",
                title: "Greed Station dev log",
                summary: "Our submission for GoedWare Game Jam 14",
                target: "",
                text:
                "A dev log and retrospective about my first game jam which I've worked on for 7 days",
                tasks: [
                    // "Core team lead programmer during release phase",
                    // "New heroes and gameplay systems (challenges, grade, rush, AI and much more)",
                    // "Tools to speed up iteration times (localization, UI)",
                    // "Tutorials and a ton of UI additions and changes",
                ],
            },
        ]
    };
</script>

<Navigation />

<div class="xl:grid grid-cols-4">
    <div class="hidden xl:block">
        <About asSidebar="true" />
    </div>

    <div class="col-span-3 col-start-2">
        <Hero />
        <div class="p-4 sm:p-8 xl:pr-80 xl:px-16 max-w-screen-2xl">
            <div class="xl:hidden"><About /></div>
            <div data-aos="fade-up"><Experiences /></div>
            <div data-aos="fade-up"><ProjectCardCollection data={workData}/></div>
            <div data-aos="fade-up"><Skills /></div>
            <!-- <div data-aos="fade-up"><ProjectCardCollection data={blogData}/></div> -->
        </div>
    </div>
</div>
