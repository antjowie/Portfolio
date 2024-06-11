<script>
    import Icon from "@iconify/svelte";

    export let href;
    export let src;
    export let title;
    export let summary;
    export let text;
    export let tasks;
</script>

<a
    {href}
    target="_blank"
    rel="noreferrer"
    class="group my-6 grid grid-cols-1 bg-background-light rounded-xl overflow-hidden 2xl:grid-cols-2 2xl:h-72"
    data-aos="fade-up"
>
    <!-- Image div -->
    <div class="row-start-1 col-start-1 col-span-2">
        <div class="relative w-full h-40 overflow-hidden 2xl:h-full">
            <!-- Gradient -->
            <div
                class="hidden 2xl:block absolute bg-gradient-to-t from-black w-full h-full opacity-90 z-10 transition group-hover:translate-y-16"
            />
            <!-- Hover gradient -->
            <div
                class="hidden 2xl:block absolute bg-transparent w-full h-full transtition duration-200 opacity-50 z-10 group-hover:bg-black group-active:opacity-0"
            />

            <!-- Image -->
            <img
                {src}
                alt=""
                class="absolute inset-0 z-0 w-full h-full object-cover 
                transition scale-110 group-hover:scale-125 group-active:scale-100"
            />
        </div>
    </div>
    <!-- Title -->
    <div
        class="row-start-2 col-start-1 z-20 m-4 pb-2 border-b-2 border-primary border-opacity-50 2xl:row-start-1 2xl:relative 2xl:border-0"
    >
        <div class="2xl:absolute bottom-2">
            <h2 class="font-bold text-3xl text-secondary">{title}</h2>
            <p class="text-sm">{summary}</p>
        </div>
    </div>

    <!-- Text -->
    <div
        class="z-20 row-start-3 col-start-1 m-4 mt-0 2xl:row-start-1 2xl:col-start-2 2xl:flex items-center 
        transition  2xl:opacity-0 2xl:translate-x-10 2xl:group-hover:translate-x-0 2xl:group-hover:opacity-100"
    >
        <div class="z-20">
            <p class="my-2">{text}</p>
            <ul>
                Contributions:
                {#each tasks as task}
                    <li class="">
                        <p>
                            <Icon
                                class="text-highlight"
                                style="display:inline"
                                icon="mdi:checkbox-marked-circle-outline"
                                inline={true}
                            />
                            {task}
                        </p>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</a>
