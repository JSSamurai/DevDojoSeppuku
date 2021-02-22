# **<span style="color: crimson;">Developer's Dojo: Seppuku</span>**

#### Homepage: https://github.com/JSSamurai/JSDojo

#### Contact: Katana.Development@gmail.com

---

<br>

> ##### 2021-FEB-21st @ 21:24pst
>
> ### <span style="color: crimson;"> **NOTICE:**</span> Mistaken Release of Developer's Dojo: Seppuku
>
> ##### I released a version of Developer's Dojo: Seppuku (this theme), accedintly about a week ago while learning how to publish extentions into Microsoft's VS Marketplace. When the previous version was released the theme was far from ready for use. For some reason I left it in the marketplace, which was a mistake. I don't know why I felt I should leave a half completed extension in marketplace, but I did, anyhow; the early release is incorrectly named, and has some other incorrect meta-data attached to it, that I cannot fix with an update, as it has to be set (as far as I can tell) when the theme is published. As of writing this, (2021-FEB-22st@20:53pst) the other version of the theme will be perminantly removed, and this color-theme-extension, 'Developer's Dojo: Seppuku' will be the theme that will be in the market place, and will recieve future updates. I applogize for any inconvienance &/or confusion that has cuased. Feel free to contact me if you have any questions (my email is listed above).
>
> ---

<br><br>

## <span style=" color: #0BB0B5">Dev's Dojo Color Scheme</span>

I kept track of nearly all the colors I used to create 'Developer's Dojo: Seppuku'. This, obviously, required me to do my best to condense the amount of shades for each color down to as few as possible. The colors are listed in a JSON format, and the list is composed of 4 groups: 'Editor Colors', 'Syntax Colors', 'Source-Control Colors' and 'Status Colors'. This list can be extreamly resourceful, and IMO every theme should come with one. If there is any confusion over the color of a highlighted item, or highlighted syntax, this list is a good bet for figuring out what the highlighted color is trying to communicate.

<br>

```
    "EditorScheme": {
        "NuetralsGroup": {
            "TrueWhite": "#FFFFFF",
            "PlainWhite": "#EEEEEE",
            "WhiteSmoke_1": "#D8D8D8",
            "WhiteSmoke_2": "#CCCCCC",
            "LightGrey_1": "#BBBBBB",
            "LightGrey_2": "#AAAAAA",

            "TrueBlack": "#000000",
            "OffBlack_1": "#010204",
            "OffBlack_2": "#060A10",
            "Charcoal_1": "#080D15",
            "Charcoal_2": "#111418",
            "Charcoal_3": "#12151A"
        },
    }
```

<br><br>

## <span style=" color: #0BB0B5">Supporting VSCodes Newest Features</span>

As of **_JANUARY 2021_** The tab decorations feature has become available, via the workbench.editor.decorations.colors setting. feature has become available. I really like this feature that VS Code now offers. The only problem with it is that many theme's use foregrond highlighting within tabs to comunicate which document is active within the editor, and the top-tab borders comunicate which tab has been modified. Well now using "workbench.editor.highlightModifiedTabs" is outdated

To get the most out of Developer's Dojo: Seppuku the configuration below should be used, but as with all themes its obviously not required. The first one is a given, equipe the theme... SemanticHighlighting.enabled should be set to auto or true as I took the time to use semantic tokens. The only reason not to equip semanticHighlighting would be if you use a language that doesn't support it, then just set it to auto. I suggest the tab sizing be set to fit, and pinnedTabSizing to normal as I feel that those configurations offers the best looking aesthetics. OverrulerBorder set to false makes it so a second editors first tab is missing a border, so I perfer it set to true. I put a lot of work into 'Source Controll Highlighting' (aka SCM). I don't really have a particular suggestion as I really like the 'editor.decorations.colors' setting. I think its new, IDK, I just found it one day. If you have not tried decorations.colors, it highlights the tabs forgrounds. To use this, a theme needs to take it into account, becuase if a theme uses the tab-foregrounds alone to highlight active tabs, this setting will cuase confusion, as it changes tab foregrounds. With that aside, I like the decoration colors setting equiped, along with 'scm.diffDecorations' set to true, and scm.diffDecorationsGutterWidth set to 4. There are a few more settings I listed that don't need to go over them. Any settings I did not mention are settings that can equip somthing graphical that I styled, so that what every set up you use it matches the theme, rather than just being set to default.

```
    {
        // Suggested Settings Configurations

        "workbench.colorTheme": "Developers Dojo: Seppuku",
        "editor.semanticHighlighting.enabled": true,
        "workbench.editor.tabSizing": "fit",
        "workbench.editor.pinnedTabSizing": "normal",
        "editor.overviewRulerBorder": true,
        "scm.diffDecorations": "gutter",
        "scm.diffDecorationsGutterWidth": 4,
        "editor.renderLineHighlight": "all",
        "workbench.editor.decorations.colors": true,
        "workbench.tree.renderIndentGuides": "always",
        "scm.providerCountBadge": "visible",
        "workbench.editor.highlightModifiedTabs": true,
        "debug.showBreakpointsInOverviewRuler": true,
        "editor.rulers": [20, 30, 40, 50, 60, 70, 80, 80, 82, 82]
    }

```

<br>

---

<br>

<br>

---

## Seppuku's Color Profile
