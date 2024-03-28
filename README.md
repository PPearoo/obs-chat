# Chat!
 A simplistic OBS chat similar to that of Ludwig's and Jschlatt's - with random colors for names included

 You can use this code freely. I have been looking around for Ludwig's chat code but I can't seem to find it anywhere, so I made my own interpretation and decided to put it on GitHub so everyone else can use it freely.

 _Note: you need the exact HTML, CSS and JS from the correspondant files._

## Pros
 This chat is optimized for YouTube. However, I added the color generation script that Twitch has. It generates colors based on usernames, which means even though it's going to seem random, the colors for specific users will never change.

 Because the CSS file is using Streamlabs' variables, you can still change the font size and the text color (of the message, not the person who sent the message) straight from the dashboard.

 Every message has an outline and a drop shadow to make the messages easily distinguishable from the background.

 Similar to popular streamers' chats, Jschlatt and Ludwig use a similar chat below their face cams.

## Cons
 It uses an outdated color generation script; it still works, but it's not what Twitch uses currently. _(Twitch currently generates a random color from a pre-defined list, adds that color to a database attached to a username, and uses that color; we can't do that because of Streamlabs' limitations.)_

 No animations: first of all, I'm too lazy to implement them, second of all, Jschlatt and Ludwig don't have animations, and the current code is trying to replicate their chats.

# How to implement
## Tools you'll need
- Streamlabs account
- Depending on what you're using to livestream: Streamlabs OBS or OBS Studio _(XSplit is gay)_

## Step-by-step guide
1. Go to the [Streamlabs OBS website](https://streamlabs.com/) and log in / create an account.
2. Go to your dashboard.
3. Scroll to **Essentials** > **All Widgets**.
4. Find **Chat Box**.
5. Scroll down until you see a switch labeled "Enable Custom HTML/CSS" - click on **Enabled**.
6. In the HTML tab, paste the contents of `index.html`.
7. In the CSS tab, paste the contents of `style.css`.
8. In the JS tab, paste the contents of `scripts.js`.
9. Click on **Save Settings**.