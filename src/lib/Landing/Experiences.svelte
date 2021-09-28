<script>
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";

    let experiences = [
        {
            src: "companies/abstraction.png",
            href: "https://abstraction.games/",
            title: "C++ Programmer - Internship",
            company: "Abstraction Games",
            duration: "October 2021 - November 2022",
            text: ["Started my internship in 2021. First task yet to receive!"],
        },
        {
            src: "companies/buas.png",
            href: "https://www.buas.nl/en",
            title: "IGAD Programmer Student",
            company: "Breda University of Applied Sciences",
            duration: "September 2018 - Ongoing",
            text: [
                "In year 3, I worked with 30 others on the year long project <a href='https://store.steampowered.com/app/1491650/Last_Resort/' target='_blank' class='hover-line text-highlight'>Last Resort</a>. Where I learned about UE4 multiplayer tech.",

                "In year 2, I learned about graphics and maths. I built a renderer using OpenGLES for the Raspberry Pi, resulting in the game <a href='https://github.com/antjowie/empires' target='_blank' class='hover-line text-highlight'>Empires</a>. I also made a <a href='https://github.com/antjowie/ray-tracer' target='_blank' class='hover-line text-highlight'>ray tracer</a>. Finally, I worked with a team to create the best game of year 2, <a href='https://buas.itch.io/temple-of-giants' target='_blank' class='hover-line text-highlight'>Temple of Giants</a>.",

                "In year 1, I've created small games such as <a href='https://github.com/antjowie/gauntlet' target='_blank' class='hover-line text-highlight'>Gauntlet</a> and <a href='https://github.com/antjowie/galaxians' target='_blank' class='hover-line text-highlight'>Galaxians</a>. These were created using school's framework. Giving me a better understanding of system design and patterns.",

                "Started in 2018. Ranked 13th from selection with my intake game <a href='https://github.com/antjowie/Ray-Shaper' target='_blank' class='hover-line text-highlight'>Ray Shaper</a>. The year I started to learn C++.",
            ],
        },
    ];

    let index = 0;
    let toRight;
    let current = experiences[index];
</script>

<div id="experiences" class="p-4 py-8">
    <h2 class="py-4 font-bold font-heading text-5xl text-secondary">My career</h2>
    <p class="text-lg">Places I've had the pleasure of working at.</p>

    <div class="py-4 grid grid-cols-2">
        {#each experiences as val, i}
            <!-- The button to select an experience -->
            <button
                on:mousedown={() => {
                    if (current !== val) {
                        current = val;
                        toRight = i > index;
                        index = i;
                    }
                }}
                class="relative group h-32 border-b-4 transition "
                class:border-primary={val !== current}
                class:border-highlight={val === current}
            >
                <div
                    class="absolute inset-0 transition bg-background group-active:opacity-50 group-active:bg-white
                    "
                    class:bg-white={val === current}
                    class:opacity-10={val === current}
                />
                <img
                    class="z-10 object-contain m-auto max-w-full h-3/4 transition scale-100 group-hover:scale-110
                    group-active:scale-75"
                    src={val.src}
                    alt=""
                />
            </button>
        {/each}
    </div>

    <!-- https://stackoverflow.com/questions/59882179/svelte-transition-between-two-elements-jumps -->
    <!-- By creating a grid we force the div to be in the same
    since delay only changes the visiblity -->
    <div class="grid grid-rows-1 grid-cols-1">
        {#key current}
            <div
                class="col-start-1 row-start-1 col-spawn"
                in:fly={{ x: 40 * (toRight ? 1 : -1), delay: 250, duration: 250 }}
                out:fly={{ x: 40 * (toRight ? -1 : 1), duration: 250 }}
            >
                <h2 class="text-2xl font-bold">{current.title}</h2>
                <a class="hover-line" href={current.href} target="_blank"
                    ><h2 class="text-2xl font-bold text-highlight inline">#{current.company}</h2></a
                >
                <h3 class="mb-4">{current.duration}</h3>
                <ul class="">
                    {#each current.text as entry}
                        <li class="flex flex-row items-center gap-2 py-2">
                            <Icon
                                class="text-highlight flex-shrink-0"
                                icon="mdi:checkbox-marked-circle-outline"
                            />
                            <div>
                                {@html entry}
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        {/key}
    </div>
</div>
