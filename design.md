# macOS Design System Specification (`design.md`)

This document outlines the design tokens, component specifications, layout rules, and interaction patterns conforming to Apple's macOS Human Interface Guidelines (HIG).

---

## 1. Color Palette & System Accents

### 1.1 System Accent Colors
| Accent | Light Mode Hex | Dark Mode Hex | CSS Variable |
| :--- | :--- | :--- | :--- |
| **Blue (Default)** | `#007AFF` | `#0A84FF` | `--macos-accent-blue` |
| **Purple** | `#AF52DE` | `#BF5AF2` | `--macos-accent-purple` |
| **Pink** | `#FF2D55` | `#FF375F` | `--macos-accent-pink` |
| **Red** | `#FF3B30` | `#FF453A` | `--macos-accent-red` |
| **Orange** | `#FF9500` | `#FF9F0A` | `--macos-accent-orange` |
| **Yellow** | `#FFCC00` | `#FFD60A` | `--macos-accent-yellow` |
| **Green** | `#34C759` | `#30D158` | `--macos-accent-green` |
| **Graphite** | `#8E8E93` | `#98989D` | `--macos-accent-graphite` |

### 1.2 Neutral & Surface Colors
* **Light Mode Surfaces**:
  * Canvas / Background: `#FFFFFF`
  * Secondary Background: `#F6F6F6`
  * Sidebar / Translucent Layer: `rgba(246, 246, 246, 0.8)`
  * Control Fill: `rgba(0, 0, 0, 0.05)`
  * Border / Separator: `rgba(0, 0, 0, 0.08)`
* **Dark Mode Surfaces**:
  * Canvas / Background: `#1E1E1E`
  * Secondary Background: `#282828`
  * Sidebar / Translucent Layer: `rgba(40, 40, 40, 0.75)`
  * Control Fill: `rgba(255, 255, 255, 0.1)`
  * Border / Separator: `rgba(255, 255, 255, 0.12)`

### 1.3 Vibrancy & Materials
* **Sidebar / Titlebar Vibrancy**:
  ```css
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  ```
* **Window Shadows**:
  ```css
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08);
  ```

---

## 2. Typography (San Francisco / SF Pro)

### 2.1 Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", sans-serif;
```

### 2.2 Typographic Hierarchy
| Style | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Large Title** | `26px` | 700 (Bold) | `32px` | `0.38px` |
| **Title 1** | `22px` | 700 (Bold) | `28px` | `0.35px` |
| **Title 2** | `17px` | 600 (Semibold) | `22px` | `-0.41px` |
| **Title 3** | `15px` | 600 (Semibold) | `20px` | `-0.24px` |
| **Headline** | `13px` | 600 (Semibold) | `18px` | `-0.08px` |
| **Body** | `13px` | 400 (Regular) | `18px` | `-0.08px` |
| **Callout** | `12px` | 400 (Regular) | `16px` | `0.0px` |
| **Subheadline** | `11px` | 400 (Regular) | `14px` | `0.07px` |
| **Footnote** | `10px` | 400 (Regular) | `13px` | `0.12px` |
| **Caption 1** | `10px` | 500 (Medium) | `13px` | `0.12px` |
| **Caption 2** | `9px` | 400 (Regular) | `12px` | `0.17px` |

---

## 3. Window Anatomy & Chrome

### 3.1 Window Structure
* **Window Corner Radius**: `10px` to `12px`
* **Titlebar / Toolbar Heights**:
  * Unified Header / Titlebar: `52px`
  * Compact Titlebar: `28px`
  * Standard Toolbar: `38px`

### 3.2 Traffic Light Controls (Window Management)
* **Diameter**: `12px`
* **Spacing**: `8px` between circles
* **Margin Left**: `13px`
* **Colors**:
  * Close: `#FF5F56` (Active) / Hover icon: `✕`
  * Minimize: `#FFBD2E` (Active) / Hover icon: `—`
  * Zoom / Full Screen: `#27C93F` (Active) / Hover icon: `⤢`

---

## 4. Component Dimensions & Border Radii

### 4.1 Buttons & Inputs
* **Standard Push Button**:
  * Height: `22px` to `24px`
  * Border Radius: `5px` to `6px`
  * Padding: `0 12px`
  * Font Size: `13px`
* **Text Field & Search Bar**:
  * Height: `24px` to `28px`
  * Border Radius: `6px`
  * Search Icon: `14px` SF Symbol / SVG
* **Segmented Control**:
  * Height: `22px`
  * Container Border Radius: `6px`
  * Active Segment Radius: `5px`
  * Background: `rgba(0, 0, 0, 0.05)`

### 4.2 Navigation & Sidebars
* **Sidebar Width**: `200px` – `260px` (Collapsible)
* **Sidebar Row Height**: `28px`
* **Sidebar Row Radius**: `5px`
* **Active Row Fill**: Selected accent color (`#007AFF`) or subtle neutral (`rgba(0, 0, 0, 0.08)`)

---

## 5. Micro-Interactions & Motion

* **Transition Duration**: `150ms` – `200ms`
* **Easing**: `cubic-bezier(0.25, 1, 0.5, 1)` (macOS standard ease-out)
* **Hover States**:
  * Buttons: Brightness bump (`filter: brightness(1.05)`)
  * Sidebar items: Subtle background fade (`rgba(0, 0, 0, 0.04)`)
* **Active / Press States**:
  * Buttons: Scale `0.98` or brightness dim (`filter: brightness(0.92)`)
