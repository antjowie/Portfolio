<script lang="ts">
    import Icon from "@iconify/svelte";

    let { target = "_blank", href, src, title, summary, text, tasks } = $props();
</script>

<div data-aos="fade-up">
    <a
        {href}
        {target}
        rel="noreferrer"
        class="
    group my-6
    grid grid-cols-1
    overflow-hidden rounded-xl
    bg-surface-a10 text-light-a10
    no-underline transition-colors
    duration-200 hover:bg-surface-a30
    2xl:h-72 2xl:grid-cols-2"
    >
        <!-- Image div -->
        <div class="col-span-2 col-start-1 row-start-1">
            <div
                class="
        relative h-40 w-full overflow-hidden
        2xl:h-full
        "
            >
                <!-- Gradient -->
                <div
                    class="
                absolute z-10 block h-full w-full
                bg-linear-to-t from-surface-a10 via-transparent
                transition duration-200
                group-hover:from-surface-a30 2xl:from-surface-a0
                2xl:via-surface-a0/50 2xl:opacity-90
                2xl:group-hover:translate-y-16
                2xl:group-hover:from-surface-a0
                "
                ></div>

                <!-- Hover gradient -->
                <div
                    class="transtition absolute z-10 block h-full w-full
                bg-transparent opacity-85
                duration-200 group-active:opacity-50
                2xl:group-hover:bg-surface-a0
                "
                ></div>

                <!-- Image -->
                <img
                    {src}
                    alt=""
                    class="absolute inset-0 z-0 w-full scale-110
                object-cover transition group-hover:scale-125 group-active:scale-100"
                />
            </div>
        </div>
        <!-- Title -->
        <div
            class="
        2xl:sizing
        border-primary
        border-opacity-50 z-20 col-start-1 row-start-2 m-4
        pb-2 2xl:absolute 2xl:w-1/2 2xl:place-self-end 2xl:justify-self-start
        "
        >
            <h2
                class="
                text-light-a10 2xl:group-hover:text-light-a0/90
                transtition text-3xl font-bold duration-200
                2xl:group-hover:text-4xl"
            >
                {title}
            </h2>
            <p class="transtition text-sm duration-200 2xl:group-hover:text-lg">{summary}</p>
        </div>

        <!-- Text -->
        <div
            class="
        z-20 col-start-1 row-start-3 m-4 mt-0 items-center transition
        2xl:col-start-2 2xl:row-start-1 2xl:flex
        2xl:translate-x-10 2xl:opacity-0
        2xl:group-hover:translate-x-0 2xl:group-hover:opacity-100
        "
        >
            <div class="z-20">
                <p class="my-2">{text}</p>
                <ul>
                    {#each tasks as task (task)}
                        <li class="flex flex-row gap-2">
                            <div>
                                <Icon
                                    class="text-highlight"
                                    style="display:inline"
                                    icon="mdi:checkbox-marked-circle-outline"
                                    inline={true}
                                />
                            </div>
                            <p>{task}</p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </a>
</div>
