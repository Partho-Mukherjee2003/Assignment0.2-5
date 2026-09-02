# Emergency Service Directory 🚨

**Emergency Service Directory** is a responsive web application that gives users quick, one-click access to important emergency and public helpline numbers in Bangladesh — including police, fire service, ambulance, and other government helplines. Users can call a number directly, copy it to their clipboard, mark favorites, and track a history of the numbers they've used.

🔗 **Live Site:** [https://partho-mukherjee2003.github.io/Assignment0.2-5/](https://partho-mukherjee2003.github.io/Assignment0.2-5/)
📦 **Repository:** [github.com/Partho-Mukherjee2003/Assignment0.2-5](https://github.com/Partho-Mukherjee2003/Assignment0.2-5)

## ✨ Features

- **Emergency Number Directory** – Browse a categorized grid of essential contact numbers (National Emergency, Police, Fire Service, Ambulance, Women & Child Helpline, Anti-Corruption, Electricity, Railway, NGO helplines, and more).
- **One-Click Call** – Instantly dial a number using the **Call** button on each card.
- **Copy to Clipboard** – Copy any number with a single click via the **Copy** button, with a running copy counter in the navbar.
- **Favorites (Love) Counter** – Mark helpline cards as favorites using the heart icon; a live counter tracks total favorites.
- **Call History Log** – Automatically records copied/called numbers in a history panel, with a **Clear** button to reset it.
- **Coin/Reward Counter** – A gamified coin counter in the navbar that responds to user interactions.
- **Fully Responsive Layout** – Grid-based card layout that adapts from mobile to large desktop screens.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and markup |
| **Tailwind CSS** (via CDN) | Utility-first styling and responsive layout |
| **daisyUI** | Prebuilt Tailwind component classes (buttons, cards) |
| **JavaScript (Vanilla)** | Core interactivity — copy, call, favorites, and history logic |
| **Font Awesome** | Icons (heart, clock, phone, copy, etc.) |
| **Google Fonts** (Roboto, Hind Madurai) | Typography |
| **GitHub Pages** | Live deployment/hosting |

## 📁 Project Structure

```
Assignment0.2-5/
├── assets/                  # Images and icons (logo, service icons, heart, coin, etc.)
├── javascript/
│   ├── fun.js                # Core app logic (copy, call, favorites, history)
│   └── sharedcode.js         # Shared/reusable helper functions
├── styles/
│   └── style.css             # Custom styles beyond Tailwind utilities
├── index.html                 # Main application page
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🚀 Getting Started

This is a static front-end project — no build tools, package manager, or server-side setup is required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Partho-Mukherjee2003/Assignment0.2-5.git
   cd Assignment0.2-5
   ```

2. **Open the project**
   Open `index.html` directly in your browser:
   ```bash
   # macOS
   open index.html

   # Windows
   start index.html

   # Linux
   xdg-open index.html
   ```

   Or serve it locally for the most consistent experience:
   ```bash
   npx serve .
   ```

## 🖥️ Usage

- Browse the grid of emergency service cards, each showing a service name, category tag, and contact number.
- Click **Call** to dial the number directly (on supported devices) or **Copy** to copy it to your clipboard — the copy counter in the navbar updates automatically.
- Tap the ♡ **heart icon** on a card to mark it as a favorite; the favorites counter updates in real time.
- Check the **Call History** panel to review recently used numbers, and click **Clear** to reset the log.

## 🌐 Deployment

The project is deployed via **GitHub Pages** directly from the `main` branch, and is publicly accessible at:
👉 [https://partho-mukherjee2003.github.io/Assignment0.2-5/](https://partho-mukherjee2003.github.io/Assignment0.2-5/)

## 📌 Notes

This project was built as an academic assignment (Assignment 0.2-5) to practice front-end fundamentals — responsive UI design with Tailwind CSS, DOM manipulation with vanilla JavaScript, and event-driven interactivity (click handlers, live counters, and local state tracking).

## 🤝 Contributing

This is an individual academic project, so external contributions aren't expected. Feedback and suggestions are welcome via [Issues](https://github.com/Partho-Mukherjee2003/Assignment0.2-5/issues).

## 👤 Author

**Partho Mukherjee**
GitHub: [@Partho-Mukherjee2003](https://github.com/Partho-Mukherjee2003)

## 📄 License

This project currently has no license specified. Feel free to reach out to the author if you'd like to use it for other purposes.
