---
title: 'Unity: Highlight Tile in Tilemap on Mouseover'
published: true
created: 2020-10-18
description:
tags: unity, csharp, gamedev
cover_image:
---

I am a web developer getting into game development with Unity. My project today was a simple 2D top-down view tilemap that highlights tiles on mouseover and places them on click. The result should look like this:

![Highlighting and adding tiles in Unity: the desired result](/img/writing/unity-highlight-tiles-result.gif){.rounded .shadow}

Since I will not start at zero in this article, here is a list of tutorials I consumed to get here myself:

- [LEARN UNITY - The Most BASIC TUTORIAL I'll Ever Make (Video)](https://www.youtube.com/watch?v=pwZpJzpE2lQ)
- [TILEMAPS in Unity (Video)](https://www.youtube.com/watch?v=ryISV_nH8qw)
- [Mouse Click Movement in Isometric Tilemap - Unity Tutorial (Video)](https://www.youtube.com/watch?v=b0AQg5ZTpac)

## Setup

Make sure you have all the Sprites, Tiles and Pallets set up. If you don't have any you can use the [Sprites from my example](/archives/unity-highlight-tilemap-assets.zip). Create a new `2D Object > Tilemap` in your Hierarchy, it will create a Grid together with a Tilemap child. Create two more Tilemaps as children of the Grid. The bottom-most Tilemap will be our terrain with plain grass for this example. The second Tilemap is for the path tiles we want to place and the uppermost is the one where we overlay our highlight indicator.

I used the RuleTile to make the path pieces snap automatically, but it requires an additional package: https://github.com/Unity-Technologies/2d-extras (not required)

Your setup should look similar to this screenshot:

<figure class="mb-4">
  <a href="/img/writing/unity-highlight-tiles-setup.jpg">
    <img
      class="rounded inline-block shadow"
      src="/img/writing/unity-highlight-tiles-setup-480.jpg"
      srcset="/img/writing/unity-highlight-tiles-setup-480.jpg 480w, /img/writing/unity-highlight-tiles-setup-640.jpg 640w, /img/writing/unity-highlight-tiles-setup-960.jpg 960w, /img/writing/unity-highlight-tiles-setup.jpg"
      alt="Highlighting and adding tiles in Unity: Setup"
    />
  </a>
</figure>

If you have difficulty getting to this point feel free to grab the project file: [highlight-tilemap-example.unitypackage](/archives/highlight-tilemap-example.unitypackage)

## Script

Now to the script that does the magic. I called it `GridController` and it is attached to the grid element. This last point is significant because we need to get hold of a reference to the grid in our code.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;
using UnityEngine.UIElements;

public class GridController : MonoBehaviour
{
    private Grid grid;
    [SerializeField] private Tilemap interactiveMap = null;
    [SerializeField] private Tilemap pathMap = null;
    [SerializeField] private Tile hoverTile = null;
    [SerializeField] private RuleTile pathTile = null;


    private Vector3Int previousMousePos = new Vector3Int();

    // Start is called before the first frame update
    void Start() {
        grid = gameObject.GetComponent<Grid>();
    }

    // Update is called once per frame
    void Update() {
        // Mouse over -> highlight tile
        Vector3Int mousePos = GetMousePosition();
        if (!mousePos.Equals(previousMousePos)) {
            interactiveMap.SetTile(previousMousePos, null); // Remove old hoverTile
            interactiveMap.SetTile(mousePos, hoverTile);
            previousMousePos = mousePos;
        }

        // Left mouse click -> add path tile
        if (Input.GetMouseButton(0)) {
            pathMap.SetTile(mousePos, pathTile);
        }

        // Right mouse click -> remove path tile
        if (Input.GetMouseButton(1)) {
            pathMap.SetTile(mousePos, null);
        }
    }

    Vector3Int GetMousePosition () {
        Vector3 mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        return grid.WorldToCell(mouseWorldPos);
    }
}
```

After some header code, which should not be too cryptic for any developer, are four private serialized properties. `[SerializeField]` exposes this property in the Unity editor where we can reference the game elements that we need for our code to work.


<div class="flex justify-around flex-wrap md:flex-no-wrap">
  <div class="w-full md:w-1/2">

```csharp
[SerializeField] private Tilemap interactiveMap = null;
[SerializeField] private Tilemap pathMap = null;
[SerializeField] private Tile hoverTile = null;
[SerializeField] private RuleTile pathTile = null;
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">

![GridController properties expost in Unity ](/img/writing/unity-grid-controller-props.jpg){.rounded .shadow}

  </div>
</div>

Since we attached this script to the Grid component we don't need it as a separate prop but can grab it with `gameObject.GetComponent<Grid>()` (`gameObject` seems to be initialized outside the class, not sure how this works).

The rest of the code is pretty easy to read. We get the current mouse position for each frame and check to which coordinates of the grid it corresponds (the `mousePos` variable). We then add the `hoverTile` to the "Interactive" Tilemap. We add the `pathTile` to the "Path" Tilemap on left-click while right-click removes it. The only slight complication is the need to remove the old hoverTile once we move the mouse to another coordinate, hence the need to remember `previousMousePos`.

And voilá, now we can highlight and add tiles with our mouse. Pretty neat :smile:

## Acknowledgments & Links

- Thanks to [Pipoya](https://pipoya.itch.io/) for this outstanding free 32x32 tileset: https://pipoya.itch.io/pipoya-rpg-tileset-32x32
- Repository: https://github.com/lhermann/unity-highlight-tilemap-example
- Unity Package: [highlight-tilemap-example.unitypackage](/archives/highlight-tilemap-example.unitypackage)

_Note: I am a Unity beginner, so this code may neither be good, performant, or optimized. Its sole quality is that it works._


