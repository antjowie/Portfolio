<script>
    import Button from "$lib/Button.svelte";
    import Icon from "$lib/Icon.svelte";
    import anime from "animejs/lib/anime.es";
    import { onMount } from "svelte";

    export let asSidebar = "";

    let root;
    let windowWidth;

    onMount(() => {
        // Type effect for last name
        var textWrapper = root.querySelector("h2");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter' style='display: inline-block;'>$&</span>"
        );

        // Make screen fullsize
        let tl = anime
            .timeline()
            // Stagger the text
            .add({
                targets: root.querySelectorAll("h1, p, .contact, img"),
                opacity: [0, 1],
                translateY: [50, 0],
                delay: anime.stagger(150),
                // duration: 250,
                easing: "easeOutQuart",
            })
            // Make title pop in
            .add(
                {
                    targets: "h2 .letter",
                    scale: [0, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutBack",
                    duration: 600,
                    delay: (el, i) => 80 * (i + 1) + 200,
                },
                0
            );
        if (windowWidth >= 1280) {
            tl.add({
                targets: root,
                width: ["100%", "25%"],
                duration: 1000,
                easing: "easeInOutQuad",
            }, 
            "-=700"
        );
        } else {
            tl.add(
                {
                    targets: "#hero",
                    height: ["0", "33vh"],
                    duration: 1000,
                    easing: "easeInOutQuad",
                },
                2000
            );
            tl.add(
                {
                    targets: "root",
                    "padding-top": ["33vh", "0"],
                    duration: 1000,
                    easing: "easeInOutQuad",
                },
                "-=1000"
            );
        }
    });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
    bind:this={root}
    id="about"
    class="p-4 pt-12 py-8 {asSidebar
        ? 'fixed h-screen z-50 w-1/4 flex flex-col justify-center bg-background-light'
        : ''}"
>
    <div class={asSidebar ? " relative p-4 inset-0 m-auto max-w-1/4" : ""}>
        <div
            class="grid items-center grid-cols-1 grid-rows-2 
            sm:grid-cols-2 sm:grid-rows-1 
            xl:grid-cols-1 xl:grid-rows-2
            2xl:grid-cols-2 2xl:grid-rows-1"
        >
            <div>
                <h1 class="text-2xl whitespace-nowrap">Hey there, I am</h1>
                <h1 class="font-bold text-4xl font-heading text-secondary">Angelo Anthony</h1>
                <h2 class="font-bold text-5xl font-heading text-highlight">Rettob</h2>
                <h1 class="text-2xl whitespace-nowrap ">Game Developer</h1>
            </div>
            <img
                class="object-cover rounded-full m-auto w-auto max-h-32 sm:max-h-40"
                src="profile.png"
                alt=""
            />
        </div>
        <p class="my-4 text-lg">
            Growing up playing R&C, been crafting games since 2017! <br> I enjoy all things tech related, be it web, software or graphics development.
        </p>
        <div class="contact">
            <Button href="resume.pdf" text="Resume" />

            <div class="mt-4 flex gap-2 h-12 items-center">
                <!-- Mail -->
                <Icon href="mailto:angelo05rettob@gmail.com" icon="email-outline" />
                <!-- LinkedIn -->
                <Icon href="https://www.linkedin.com/in/angelorettob/" icon="linkedin" />
                <!-- GitHub -->
                <Icon href="https://github.com/antjowie" icon="github" />
            </div>
        </div>
    </div>
</div>
