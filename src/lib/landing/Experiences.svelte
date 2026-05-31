<script lang="ts">
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";

    let experiences = [
        {
            src: "companies/abstraction.png",
            href: "https://abstraction.games/",
            title: "C++ Programmer - Developer",
            company: "abstraction",
            duration: "October 2021 - Present",
            text: ["Worked on Lords of The Fallen II.", "Worked on Gigantic: Rampage edition."]
        },
        {
            src: "companies/buas.png",
            href: "https://www.buas.nl/en",
            title: "IGAD Programmer Student",
            company: "Breda University of Applied Sciences",
            duration: "September 2018 - July 2022",
            text: [
                "In year 3 and 4 lots of games were made. Worked with 30 students on a year long project <a href='https://store.steampowered.com/app/1491650/Last_Resort/' target='_blank' rel='noreferrer' class='hover-line text-highlight'>Last Resort</a>. My focus was on multiplayer.",
                "In year 2, learned about graphics and maths. built a renderer using OpenGLES for the Raspberry Pi, resulting in <a href='https://github.com/antjowie/empires' target='_blank' rel='noreferrer' class='hover-line text-highlight'>Empires</a>. Made a <a href='https://github.com/antjowie/ray-tracer' target='_blank' rel='noreferrer' class='hover-line text-highlight'>ray tracer</a>. Worked in a team to create the best year 2 game <a href='https://buas.itch.io/temple-of-giants' target='_blank' rel='noreferrer' class='hover-line text-highlight'>Temple of Giants</a>.",
                "In year 1, created small games like <a href='https://github.com/antjowie/gauntlet' target='_blank' rel='noreferrer' class='hover-line text-highlight'>Gauntlet</a> and <a href='https://github.com/antjowie/galaxians' target='_blank' rel='noreferrer' class='hover-line text-highlight'>Galaxians</a>. Learned about system design and patterns.",
                "Started in 2018. Ranked 13th for intake game <a href='https://github.com/antjowie/Ray-Shaper' target='_blank' rel='noreferrer' class='hover-line text-highlight'>Ray Shaper</a>. Started learning C++."
            ]
        }
    ];

    let index = 0;
    let toRight = $state(false);
    let current = $state(experiences[index]);
</script>

<div id="experiences" class="p-4 py-8">
    <h2 class="text-light-a0 py-4 font-heading text-5xl font-bold">My work experiences</h2>

    <div class="grid grid-cols-2 py-4">
        {#each experiences as val, i (val.title)}
            <!-- The button to select an experience -->
            <button
                onmousedown={() => {
                    if (current.title !== val.title) {
                        current = val;
                        toRight = i > index;
                        index = i;
                    }
                }}
                class="group relative h-32 border-b-4 transition"
                class:border-primary-a0={val.title === current.title}
                class:border-primary-a50={val.title !== current.title}
            >
                <div
                    class="absolute inset-0 cursor-pointer bg-surface-a10 transition group-hover:bg-surface-a30"
                ></div>
                <img
                    class="z-10 m-auto h-3/4 max-w-full scale-100 object-contain transition group-hover:scale-110
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
    <div class="grid grid-cols-1 grid-rows-1">
        {#key current}
            <div
                class="col-spawn col-start-1 row-start-1"
                in:fly={{ x: 40 * (toRight ? 1 : -1), delay: 250, duration: 250 }}
                out:fly={{ x: 40 * (toRight ? -1 : 1), duration: 250 }}
            >
                <h2 class="text-2xl font-bold">{current.title}</h2>
                <a class="hover-line" href={current.href} target="_blank" rel="noreferrer"
                    ><h2 class="text-highlight inline text-2xl font-bold">#{current.company}</h2></a
                >
                <h3 class="mb-4">{current.duration}</h3>
                <ul class="">
                    {#each current.text as entry (entry)}
                        <li class="flex flex-row gap-2 py-0.5 leading-t">
                            <div class="py-1">
                                <Icon
                                    class="text-highlight shrink-0"
                                    icon="mdi:checkbox-marked-circle-outline"
                                />
                            </div>
                            <div>
                                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                {@html entry}
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        {/key}
    </div>
</div>
