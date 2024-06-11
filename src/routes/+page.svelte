<script>
    import Navigation from "$lib/Navigation.svelte";
    import Hero from "$lib/landing/Hero.svelte";
    import About from "$lib/landing/About.svelte";
    import Work from "$lib/landing/Work.svelte";
    import Experiences from "$lib/landing/Experiences.svelte";
    import Skills from "$lib/landing/Skills.svelte";
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
            <div data-aos="fade-up"><Work /></div>
            <div data-aos="fade-up"><Skills /></div>
        </div>
    </div>
</div>
