Create the complete JavaScript game engine for a Roblox-inspired 3D browser game.

File name: script.js

IMPORTANT:
- The game must run directly in a modern browser.
- Do not require a backend.
- Keep all game logic inside this file.
- Do not put HTML or CSS code in this file except dynamically generated UI when necessary.
- Use Three.js from a CDN if needed for the 3D environment.

GAME FEATURES:

1. 3D WORLD
- Create a colorful low-poly 3D world.
- Add terrain/platforms.
- Add trees, rocks, buildings and decorative objects.
- Add sky and lighting.
- Add shadows.
- Add fog for depth.
- Create a small playable map.

2. PLAYER
- Create a simple block-style humanoid player.
- Third-person camera.
- WASD movement.
- Space to jump.
- Shift for sprint.
- Mouse controls camera.
- Smooth player movement.
- Gravity and collision detection.
- Prevent player from falling through the map.

3. CAMERA
- Third-person camera.
- Smooth camera following.
- Mouse-controlled rotation.
- Camera collision handling.
- Zoom in/out with mouse wheel.

4. GAME SYSTEM
- Health system.
- XP system.
- Level system.
- Coin system.
- Score system.
- Respawn system.
- Checkpoints.
- Collectible coins.
- Collectible XP items.

5. NPCs
- Add simple NPC characters.
- NPCs should move around the world.
- Add basic interaction when the player gets close.
- Show a small interaction message.

6. QUEST SYSTEM
- Add simple quests.
- Example:
  "Collect 10 Coins"
  "Reach the Checkpoint"
  "Find the Hidden Treasure"
- Update quest progress dynamically.
- Give XP and coins when completed.

7. INVENTORY
- Create a simple inventory system.
- Allow collected items to appear in inventory.
- Hotbar should display selected items.
- Number keys 1–5 should select hotbar slots.

8. COMBAT / OBSTACLES
- Add harmless training enemies or obstacles.
- Player can interact/attack using a simple click action.
- Add cooldown system.
- Add damage and health.
- Add respawn behavior.

9. UI
- Update health bar dynamically.
- Update XP bar dynamically.
- Update coins dynamically.
- Update score dynamically.
- Update level dynamically.
- Show quest progress.
- Show notifications.
- Show game-over screen.
- Show pause menu.
- Show start-game screen.

10. CONTROLS
Desktop:
WASD = movement
Space = jump
Shift = sprint
Mouse = camera
Left click = interact/attack
E = interact
ESC = pause

Mobile:
- Virtual joystick
- Jump button
- Action button
- Sprint button
- Touch camera controls

11. GAME LOOP
- Use requestAnimationFrame.
- Use delta time.
- Keep animations smooth.
- Avoid unnecessary calculations.
- Optimize for browser performance.

12. AUDIO
- Add optional simple Web Audio API effects for:
  coin collection
  jump
  button click
  damage
  quest completion
- Do not require external audio files.

13. SAVE SYSTEM
- Use localStorage.
- Save:
  coins
  XP
  level
  inventory
  completed quests
  player progress
- Automatically save periodically.
- Load saved progress when the game starts.

14. QUALITY
- Write clean, organized and commented JavaScript.
- Avoid global variable pollution where possible.
- Handle browser errors gracefully.
- Make sure the game starts without console errors.
- Make sure all HTML IDs/classes referenced by JavaScript exist in index.html.
- Make sure the final project works on GitHub Pages.

IMPORTANT:
Return ONLY the complete JavaScript code for script.js.
