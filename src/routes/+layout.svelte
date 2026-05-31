<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { onMount } from "svelte";
    import AOS from "aos";
    import "aos/dist/aos.css";

    onMount(() => {
        AOS.init({
            offset: 200,
            delay: 0,
            once: true
        });

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-7LR782SNJ8");
    });

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7LR782SNJ8"></script>
</svelte:head>
{@render children()}
