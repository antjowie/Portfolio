<script>
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    import { fly, fade } from "svelte/transition";

    let windowHeight;
    let windowWidth;
    $: desktopView = windowWidth >= 1280;
    $: inHeroSection = scrollPos < windowHeight;

    let navVisible = true;
    let sideNavVisible = false;
    let lastScrollPos = 0;
    let scrollPos = 0;

    onMount(() => {
        // Would use desktopView, but it is false during OnMount?
        if (windowWidth >= 1280 && scrollY > windowHeight) {
            navVisible = false;
            sideNavVisible = true;
        } else {
            navVisible = true;
            sideNavVisible = false;
        }
    });

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

            navVisible = hasScrolledUp;
            sideNavVisible = false;
        }
    }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:scroll={onScroll} />

<!-- Topbar -->
<nav
    class="fixed z-40 right-0 -top-12 w-screen bg-background bg-opacity-75 transition"
    class:translate-y-12={navVisible}
>
    <!-- Fade on left side of nav bar -->
    <!-- <div
        class="left-1/3screen absolute inset-0 w-1/4 bg-gradient-to-r from-background-light via-background-light to-transparent z-50 bg-opacity-100"
    /> -->

    <!-- Top nav part -->
    <ul class="flex pr-2 space-x-2 justify-end items-center h-12 xl:space-x-8 xl:pr-16 uw:pr-96">
        <!-- <li class=""><a class="hover-line" href="resume.pdf" rel="external">Resume</a></li> -->
        <li><a class="hover-line" href="#hero">Highlight</a></li>
        <li><a class="hover-line" href="#experiences">Experiences</a></li>
        <li><a class="hover-line" href="#work">Work</a></li>
        <li><a class="hover-line" href="#skills">Skills</a></li>
        <!-- <li><a class="hover-line" href="#blog">Blog</a></li> -->
        <!-- <li class=""><a href="#lightmode">LightMode</a></li> -->
    </ul>
</nav>

<!-- Sidebar -->
{#if sideNavVisible}
    <nav
        class="fixed z-40 right-0 transition h-screen w-1/6"
        in:fly={{ x: 150, duration: 250 }}
        out:fly={{ y: 150, duration: 250 }}
    >
        <!-- Top nav part -->
        <ul class="flex flex-col m-auto items-starts mt-16 mx-16 space-y-4 tracking-wider text-lg">
            <!-- <li><a class="hover-line" href="resume.pdf" rel="external">Resume</a></li> -->
            <li><a class="hover-line" href="#hero">Highlight</a></li>
            <li><a class="hover-line" href="#experiences">Experiences</a></li>
            <li><a class="hover-line" href="#work">Work</a></li>
            <li><a class="hover-line" href="#skills">Skills</a></li>
            <!-- <li><a class="hover-line" href="#blog">Blog</a></li> -->
            <!-- <li ><a href="#lightmode">LightMode</a></li> -->
        </ul>
    </nav>
{:else if desktopView}
    <div class="z-50 fixed right-16 bottom-8" transition:fade>
        <Icon class="text-4xl animate-bounce opacity-75" icon="ic:outline-mouse" />
    </div>
{/if}
