---
block: iframe
---

Embeds an external web page in the content with an `<iframe>`. Editors enter the URL of the page, and the block only shows URLs allowed by the block configuration.

The block stores the URL and the optional caption, and the layout of the embed.

### Fields

- `src`: the URL of the page to embed. Required for the block to show anything.
- `title`: the title of the `<iframe>`, used by screen readers. Recommended.
- `description`: a text shown below the embed.
- `credit`: a rich text shown below the embed, with the credit of the source. It is stored as an object whose `data` key holds the HTML.
- `width`: the width of the embed: `center`, `wide` or `full`. Defaults to `wide` when omitted.
- `height`: the height of the embed in pixels (for example `500` or `500px`) or as a percentage (for example `100%`).
- `preserveAspectRatio`: `true` to keep the aspect ratio of the embed, measured from its first width and height. Defaults to `false`.
- `calculatedAspectRatio`: a number written by the editor when `preserveAspectRatio` is `true`, the width divided by the height. Editors do not set it.

### Example

```json
{
  "@type": "iframe",
  "src": "https://www.example.org/maps/embed",
  "title": "Office location map",
  "description": "The main office, on the ground floor.",
  "credit": {
    "data": "<p>Map data from <a href=\"https://www.example.org/\">Example.org</a></p>"
  },
  "width": "wide",
  "height": "480px",
  "preserveAspectRatio": false
}
```
