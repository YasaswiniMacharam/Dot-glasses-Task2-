# Dot-glasses-Task2-
Dot glasses-Task2-
BUILDING A REUSABLE UI COMPONENT  IN REACT  
Reusable Button Component – 
# Purpose
This component provides stylish, theme-based reusable buttons that can be easily integrated into any React project. Each button has a unique color scheme and is designed to be consistent and easy to maintain.
________________________________________Props Handled
# Prop	Type	Description
label	string	- The text displayed inside the button.
type	string - 	Specifies the style type. Accepts: "ocean", "peach", "lava", "muted", "neon".
onClick	func - 	 Function to execute when the button is clicked.
disabled	- boolean	Disables the button when set to true.
________________________________________
# jsx

<Button type="ocean" label="Ocean Blue" />
<Button type="peach" label="Peach" />
<Button type="lava" label="Lava" />
<Button type="muted" label="Muted" disabled />
<Button type="neon" label="Neon Green" onClick={() => alert('Clicked!')} />
________________________________________
# Button Types & Themes

Type	Appearance	Recommended Use
ocean	-- Cool blue with white text	Primary actions or main calls-to-action
peach	-- Soft orange/pink tone	Secondary or friendly options
lava	-- Bold red-orange tone	Destructive or critical actions
muted --	Greyed-out style	Disabled or non-interactive buttons
neon	-- Bright green neon glow	Attention-catching or success messages
________________________________________
# ✅ Use Cases
•	Call-to-Action Buttons: “Submit”, “Save”, “Continue”
•	Warning/Destructive Actions: “Delete”, “Cancel Order”
•	Disabled States: When user interaction is not allowed
•	Thematic Styling: Create fun and eye-catching UI for creative sites
# File Structure
/src
  ├── App.js
  ├── App.css
  └── components
      ├── Button.js
      └── Button.css
