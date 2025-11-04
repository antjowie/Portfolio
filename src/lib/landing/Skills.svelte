<script>
    import SkillCategory from "$lib/landing/SkillCategory.svelte";

    let languageSkills = [
        {
            href: "https://en.wikipedia.org/wiki/C%2B%2B",
            icon: "mdi:language-cpp",
            name: "c++",
        },
        {
            href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
            icon: "mdi:language-csharp",
            name: "csharp",
        },
        {
            href: "https://www.javascript.com/",
            icon: "mdi:language-javascript",
            name: "javascript",
        },
        {
            href: "https://www.rust-lang.org/",
            icon: "simple-icons:rust",
            name: "rust",
        },
    ];

    let productivitySkills = [
        {
            href: "https://visualstudio.microsoft.com/",
            icon: "mdi:microsoft-visual-studio",
            name: "visual studio",
        },
        {
            href: "https://code.visualstudio.com/",
            icon: "mdi:microsoft-visual-studio-code",
            name: "VS Code",
        },
        {
            href: "https://git-scm.com/",
            icon: "mdi:git",
        },
        {
            href: "https://www.atlassian.com/software/jira",
            icon: "mdi:jira",
        },
    ];

    let gameSkills = [
        {
            href: "https://unity.com/",
            icon: "bi:unity",
        },
        {
            href: "https://www.unrealengine.com/en-US/",
            icon: "streamline-logos:unreal-engine-logo-solid",
        },
        {
            href: "https://godotengine.org/",
            icon: "devicon-plain:godot",
        },
                {
            href: "https://www.blender.org/",
            icon: "simple-icons:blender",
        },
    ];
</script>

<div id="skills" class="p-4 py-8">
    <h1 class="py-4 font-bold font-heading text-5xl text-secondary">A few of my skills</h1>
    <p class="text-lg">Some technologies I've worked with.</p>

    <div class="flex flex-col">
        <SkillCategory category="Languages" icons={languageSkills} />
        <SkillCategory category="Productivity" icons={productivitySkills} />
        <SkillCategory category="Game development" icons={gameSkills} />
    </div>
</div>
