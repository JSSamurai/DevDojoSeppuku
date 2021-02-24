<hr style="border: 0px solid #000000; background: #004050; height: 2px; margin: 30px 0 20px 0">

## <span style="color: #FF0430; font-size: 32px; font-weight: bold; margin-left: 13.25%; padding: 10px 20px; background: #001C3C; border: 4px outset #000">Developer's Dojo: Seppuku</span>

<hr style="border: 0px solid #000000; background: #004050; height: 2px; margin-top: 20px">

<br>

<br>

#### **Homepage/Repository:** https://github.com/JSSamurai/DevDojoSeppuku

#### **Developer:** <span style="color: #2898FF">A. Jay Chambers Jr. (Tagname: JSSamurai)

<br>

## <span style="color: #089888; text-decoration: underline;">About Developer's Dojo</span>

The first thing I imagine people are going to wonder when they read this is, "Why the dual naming with colon?", so lets answer that realquick before continuing. Seppuku is part of a series of theme's that I plan on releasing. Currently I have 2 themes that I am working on: The first is this theme, which as you know already know, it is called, Developer's Dojo: 'Seppuku'. The other theme is less mature, and not as developed as seppuku, but never the less, it will be awesome, and it goes by teeeeeeeeeeeeeeeeeeehe name, Developer's Dojo: Awakening. Three themes is what I am aiming for. So in a nutshell Developer's Dojo is a collection of themes, that has only one theme currently released. I plan on releasing Awakening sometime in APRIL or may. For those who like Seppuku and are curious, Awakening will be, structurly, very similar to seppuku, but instead of a Crimson/Verdigris/Charcoal color-pallete, it will have an Azure/ Gunmetal/Chartreuse pallete.

---

<br>

## <span style="color: #089888; text-decoration: underline;">The Development of Seppuku</span>

When I started creating this theme, I had been out of school due to the pandemic for a couple of months (Side Note: I am 35 LoLz, still working on that CompSci BS :-P). The idea was to create a theme that was custom for me, however; it turns out, creating a theme from the ground up, that is fully developed, is not such an easy quick task. The development of 'Developer's Dojo: Seppuku' ended up a way greater undertaking than I what I had expected it to be. Months after I started, and after spending several hours each day, I am finally at the point were I am ready to release my first VSCode theme. I know most people will not commit the time that I did to their theme, but truthfully it wans't a choice, this theme thing became a bit of a quarantine obsession for me. Though it ended up costing me far, far more time than I ever thought it would, I am proud to say that I learned alot about VSCode & GUI frontend stuff, and not only that, I also created a really great theme. As I mentioned above I got another theme in the works, and I plan on releasing three in total, as most the ground work has been laid, I might as well see through the development of a theme collection.

---

<br>

## <span style="color: #089888; text-decoration: underline;">Delving Into What Seppuku Offers </span>

-   As of January 2021 VSCode released some extra graphical Git features that take advantage of Git Decorations. The new features don't only look cool, but they are extreamly resourcful when it comes to keeping track of one's own work. Metaphoricly speaking, they give Git a voice, by allowing Git to tell the user which files have had modification, which files have been added, and which files have been deleted or deleted from, furhermore; they tell users which files currently have modifications staged, pending the next commit. These Git Color-Decorations are not new to VSCode, you have probably seen them in action. For quite some time now, git decorations have been highlighting the foreground of file names in the sidebar, however, users can now opt to have them decorate the foregrounds of tabs as well, including adding colored badge decorations to further enhance visability, as well as coolness. I listed my perfered SCM, & Git configuration for the ('.vscode/settings.json') file bellow (in JSON format). If you currently use git, ecspecially if you are using Git in combonation with a repo like Github, then I highly suggest you checkout the features, that I blabed on about, above.

-   I added <b style="color: #64CC20">Seppukus Color Profile</b> to the bottom of the page. The color profile is extreamly useful, as it gives Seppuku users a referance for the colors that are used to comunicate status (errors, warnings, ect...), and the colors that are used to communicate Version/Source Control (Modified, Added, Staged ect...). A color-profile gives users a refrance for the the colors that the theme ass referance colors that VSCode tools and extention use to communicate information with. to better understand the environment that they are working in, IMO, a themes color-profile is an essential tool for any editor that is as contemporary as VSCode. On the flip side, VSCode has truley become the editor beyond all other editors, and modern tools, beg for modern support. Where a programming tool begs, is where a niche can be filled, by those searching to build niche software.

---

<br>

<br>

### _<span style="color: crimson;">Seppuku Color-Profile</span>_

---

```

    "SatusColors": {
        "EditorError": {
            "Background": "#FF14002B",
            "Foreground": "#FF2B00", // Italic & Bold
            "Border": "#FF1400"
        },

        "EditorWarning": {
            "Background": "#FFCC0C28",
            "Foreground": "#FFCC0C", // Foreground doesn't always highlight.
            "Border": "#FFCC0C"
        },

        "Info": {
            "Background": "#9FFF3A28",
            "Border": "#9FFF3AAA",
            "Foreground": "#9FFF3A" // Foreground doesnt always highlight
        }
    },

```

---
