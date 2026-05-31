<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    import { fly, fade } from "svelte/transition";

    let scrollPos = $state(0);
    let lastScrollPos = 0;

    let windowHeight = $state(0);
    let windowWidth = $state(0);
    let desktopView = $derived(windowWidth >= 1280);
    let inHeroSection = $derived(scrollPos < windowHeight);

    let navVisible = $state(true);
    let sideNavVisible = $state(false);

    let workElem = $state<HTMLElement | null>(null);
    let experiencesElem = $state<HTMLElement | null>(null);
    let aboutElem = $state<HTMLElement | null>(null);
    let currentElem = $state("");

    let autoHide = true;
    let timer = -1;

    function pauseAutoHide() {
        autoHide = false;
        navVisible = true;
        if (timer > 0) clearTimeout(timer);

        timer = window.setTimeout(() => {
            autoHide = true;
            timer = -1;
        }, 1000);
    }

    function onScroll() {
        // If on large screen, check if we are in hero section
        scrollPos = window.scrollY;

        if (windowWidth >= 1280) {
            navVisible = inHeroSection;
            sideNavVisible = !(scrollPos < windowHeight);
        } else {
            // Check if we scrolled up
            let delta = scrollPos - lastScrollPos;
            lastScrollPos = scrollPos;
            let hasScrolledUp = delta < 0;

            navVisible = hasScrolledUp || !autoHide;

            sideNavVisible = false;
        }

        if (aboutElem && experiencesElem && workElem) {
            if (aboutElem.getBoundingClientRect().top < windowHeight / 2) currentElem = "about";
            else if (experiencesElem.getBoundingClientRect().top < windowHeight / 2)
                currentElem = "experiences";
            else if (workElem.getBoundingClientRect().top < windowHeight / 2) currentElem = "work";
            else currentElem = "";
        }
    }

    onMount(() => {
        // Would use desktopView, but it is false during OnMount?
        if (windowWidth >= 1280 && scrollY > windowHeight) {
            navVisible = false;
            sideNavVisible = true;
        } else {
            navVisible = true;
            sideNavVisible = false;
        }

        workElem = document.getElementById("work");
        experiencesElem = document.getElementById("experiences");
        aboutElem = document.getElementById("about");

        onScroll();
    });
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} onscroll={onScroll} />

{#snippet items()}
    <li>
        <a
            onclick={pauseAutoHide}
            class="hover-line {currentElem === 'work'
                ? 'text-light-a0'
                : 'text-light-a10'} hover:text-primary-a50 transition"
            href="#work">Work</a
        >
    </li>
    <li>
        <a
            onclick={pauseAutoHide}
            class="hover-line {currentElem === 'experiences'
                ? 'text-light-a0'
                : 'text-light-a10'} hover:text-primary-a50 transition"
            href="#experiences">Experiences</a
        >
    </li>
    <li>
        <a
            onclick={pauseAutoHide}
            class="hover-line {currentElem === 'about'
                ? 'text-light-a0'
                : 'text-light-a10'} hover:text-primary-a50 transition"
            href="#about">About me</a
        >
    </li>
{/snippet}

<!-- Topbar -->
<nav
    class="fixed -top-12 right-0 z-40 w-screen bg-surface-a10/75 transition"
    class:translate-y-12={navVisible}
>
    <!-- Top nav part -->
    <ul class="flex h-12 items-center justify-end space-x-2 pr-2 uw:pr-96 xl:space-x-8 xl:pr-16">
        {@render items()}
    </ul>
</nav>

<!-- Sidebar -->
{#if sideNavVisible}
    <nav
        class="fixed right-0 z-40 h-screen w-1/6 transition"
        in:fly={{ x: 150, duration: 250 }}
        out:fly={{ y: 150, duration: 250 }}
    >
        <!-- Top nav part -->
        <ul class="items-starts m-auto mx-16 mt-16 flex flex-col space-y-4 text-lg tracking-wider">
            {@render items()}
        </ul>
    </nav>
{:else if desktopView}
    <div class="fixed right-16 bottom-8 z-50" transition:fade>
        <Icon class="animate-bounce text-4xl opacity-75" icon="ic:outline-mouse" />
    </div>
{/if}
