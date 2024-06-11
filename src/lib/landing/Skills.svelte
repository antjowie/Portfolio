<script>
    import SkillCategory from "$lib/landing/SkillCategory.svelte";

    let languageSkills = [
        {
            href: "https://en.wikipedia.org/wiki/C%2B%2B",
            icon: "language-cpp",
            name: "c++",
        },
        {
            href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
            icon: "language-csharp",
            name: "csharp",
        },
        {
            href: "https://www.javascript.com/",
            icon: "language-javascript",
            name: "javascript",
        },
    ];

    let productivitySkills = [
        {
            href: "https://visualstudio.microsoft.com/",
            icon: "microsoft-visual-studio",
            name: "visual studio",
        },
        {
            href: "https://code.visualstudio.com/",
            icon: "microsoft-visual-studio-code",
            name: "VS Code",
        },
        {
            href: "https://git-scm.com/",
            icon: "git",
        },
        {
            href: "https://www.atlassian.com/software/jira",
            icon: "jira",
        },
    ];

    let gameSkills = [
        {
            href: "https://unity.com/",
            icon: "unity",
        },
        {
            href: "https://www.unrealengine.com/en-US/",
            icon: "unreal",
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
