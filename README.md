

# 🌟 Stylish Reusable Button Component

A React-based project showcasing a set of stylish and reusable button components with unique themes, vibrant colors, and clean interaction states — all implemented **without TailwindCSS**.

![Preview](./preview.png) <!-- Replace with actual screenshot path if uploading to GitHub -->

---

## 🚀 Features

- 🖌️ Unique button styles: `Ocean`, `Peach`, `Lava`, `Muted`, `Neon`
- ⚙️ Simple props interface (`label`, `type`, `onClick`, `disabled`)
- 🔁 Reusable and easily extendable
- ✨ Hover & disabled interaction states
- 🎨 Animated image background support (optional)

---

## 📁 File Structure

```

my-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   └── Button.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── README.md
└── package.json

````

---

## 🧩 Button Component

### Props

| Prop       | Type     | Description                                                                 |
|------------|----------|-----------------------------------------------------------------------------|
| `label`    | `string` | The text displayed inside the button.                                       |
| `type`     | `string` | Button style variant. Options: `"ocean"`, `"peach"`, `"lava"`, `"muted"`, `"neon"`. |
| `onClick`  | `func`   | (Optional) Function to execute on click.                                    |
| `disabled` | `boolean`| (Optional) Disables the button when set to `true`.                          |

---

## 🧪 Example Usage

```jsx
import Button from './components/Button';

<Button type="ocean" label="Ocean Blue" />
<Button type="peach" label="Peach" />
<Button type="lava" label="Lava" />
<Button type="muted" label="Muted" disabled />
<Button type="neon" label="Neon Green" onClick={() => alert('Clicked!')} />
````

---

## 🎯 Use Cases

* CTA buttons like **Submit**, **Continue**, or **Try Now**
* Disabled buttons for unavailable actions
* Alert buttons (e.g. delete, cancel)
* Stylish success messages or highlights

---

## 🎨 Style Variants

| Type    | Color Scheme                | Use For                       |
| ------- | --------------------------- | ----------------------------- |
| `ocean` | Blue background, white text | Primary calls to action       |
| `peach` | Warm pastel peach           | Secondary or friendly actions |
| `lava`  | Deep red/orange             | Destructive actions           |
| `muted` | Greyed out, disabled look   | Disabled/non-interactive      |
| `neon`  | Neon green with glow        | Success, attention, flash     |

---

## 🛠️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/stylish-button-demo.git
   cd stylish-button-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

---

## 🖼️ Add Background Animation (Optional)

You can replace the background color in `App.css` with an animated image like:

```css
.app {
  background-image: url('/assets/animated-bg.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
}


