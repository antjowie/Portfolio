<script>
    import Icon from "@iconify/svelte";
</script>

<a href="#work">
    <div
        id="hero"
        class="group relative object-cover place-items-center h-1/3screen xl:h-screen overflow-hidden"
    >
        <!-- Highlighted projects text -->
        <div
            class="absolute inset-0 opacity-25 bg-gradient-to-t from-black to-transparent
                transition group-hover:opacity-100"
        >
            <div class="absolute p-8 bottom-0">
                <h3 class="text-xl">Highlighted project</h3>
                <h2 class="text-secondary font-bold text-4xl">Temple of Giants</h2>
            </div>
            <div
                class="absolute inset-0 text-2xl flex flex-col items-center justify-center h-screen transition opacity-0 
                group-hover:opacity-100 group-hover:animate-pulse"
            >
                <h3 class="">Click to go to projects</h3>
            </div>
        </div>

        <video autoplay loop muted class="min-w-full min-h-full object-cover">
            <source src="projects\tog\trailer.m4v" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</a>
