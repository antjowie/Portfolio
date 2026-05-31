<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import { createTimeline, stagger, eases } from "animejs";
    import { onMount } from "svelte";

    let { asSidebar = false } = $props();

    let root: Element;
    let content: Element;
    let lastName: Element;
    let windowWidth = $state(0);

    $effect(() => {
        // Type effect for last name
        lastName.innerHTML = lastName.textContent.replace(
            /\S/g,
            "<span class='letter' style='display: inline-block;'>$&</span>"
        );

        // Make screen fullsize
        const tl = createTimeline()
            // Stagger the text
            .add(root.querySelectorAll("h1, p, .contact, img"), {
                opacity: [0, 1],
                translateY: [50, 0],
                delay: stagger(75),
                // duration: 800,
                ease: eases.outQuad
            })
            .add(
                content,
                {
                    opacity: [0, 1],
                    duration: 1
                },
                0
            )
            // Make title pop in
            .add(
                "h1 .letter",
                {
                    scale: [0, 1.4, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutBack",
                    duration: 600,
                    delay: (el, i) => 80 * (i + 1) + 200
                },
                0
            );
        tl.init();

        if (windowWidth >= 1280) {
            tl.add(
                root,
                {
                    width: ["100%", "25%"],
                    duration: 1000,
                    ease: "inOutQuad"
                },
                "-=500"
            );
        } else {
            // tl.add(
            //     root,
            //     {
            //         "padding-top": ["33vh", "0"],
            //         duration: 1000,
            //         ease: "inOutQuad"
            //     },
            //     1500
            // );
            tl.add(
                "#hero",
                {
                    height: ["0", "33vh"],
                    duration: 1000,
                    ease: "inOutQuad"
                },
                1500
            );
        }
    });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
    bind:this={root}
    id="info"
    class="p-4 py-8 pt-12 {asSidebar
        ? 'fixed z-50 flex h-screen w-screen flex-col justify-center bg-surface-a10'
        : ''}"
>
    <div
        bind:this={content}
        class="{asSidebar ? ' relative inset-0 m-auto max-w-1/4 p-4' : ''} opacity-0"
    >
        <div
            class="grid grid-cols-1 grid-rows-2 items-center
            sm:grid-cols-2 sm:grid-rows-1
            xl:grid-cols-1 xl:grid-rows-2
            2xl:grid-cols-2 2xl:grid-rows-1"
        >
            <div class="text-li">
                <h1 class="text-2xl whitespace-nowrap">Hey there, I am</h1>
                <h1 class="font-heading text-4xl font-bold text-light-a0">Angelo Anthony</h1>
                <h1 class="font-heading text-4xl font-bold text-primary-a0" bind:this={lastName}>
                    Rettob
                </h1>
                <h1 class="text-2xl whitespace-nowrap">Game Developer</h1>
            </div>
            <img
                class="m-auto max-h-32 w-auto rounded-full object-cover sm:max-h-40"
                src="profile.png"
                alt=""
            />
        </div>
        <p class="my-4 text-lg">
            Growing up playing R&C, been making games since 2017! <br /> I enjoy all things tech related,
            be it web, software or graphics development.
        </p>
        <div class="contact">
            <div class="mt-4 flex h-12 items-center justify-center gap-2">
                <!-- Mail -->
                <Icon href="mailto:angelo05rettob@gmail.com" icon="mdi:email-outline" />
                <!-- LinkedIn -->
                <Icon href="https://www.linkedin.com/in/angelorettob/" icon="mdi:linkedin" />
                <!-- GitHub -->
                <Icon href="https://github.com/antjowie" icon="mdi:github" />
            </div>
        </div>
    </div>
</div>
