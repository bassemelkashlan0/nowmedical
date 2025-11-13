# Home Page Responsive Design Analysis

## Typography Patterns

### Headings
- **H1 (Hero)**: `text-4xl lg:text-5xl xl:text-6xl` (36px → 48px → 60px)
- **H2 (Section Titles)**: `text-3xl lg:text-5xl` (30px → 48px)
- **H3 (Card/Box Headings)**: `text-2xl lg:text-3xl` or `text-[26px]` (24px → 30px)

### Paragraphs
- **Base Text**: `text-base` (16px)
- **Large Text**: `text-lg` (18px)
- **Small Text**: `text-sm` (14px)

### Font Weights
- **Bold**: `font-bold` (700)
- **Medium**: `font-medium` (500)
- **Normal**: `font-normal` (400)

## Spacing Patterns

### Section Padding
- **Standard**: `py-10 lg:py-[54px]` (40px mobile → 54px desktop)
- **Large**: `py-10 lg:py-[69px]` (40px mobile → 69px desktop)

### Margins
- **Small**: `mb-4` (16px)
- **Medium**: `mb-6` (24px)
- **Large**: `mb-8` (32px)
- **Extra Large**: `mb-[21px]`, `mb-[52px]` (custom values)

### Container Padding
- **Container**: Uses `container` class (auto padding)
- **Custom Padding**: `px-4 lg:px-12` (16px → 48px)

## Layout Patterns

### Grid Systems
- **2 Column**: `grid lg:grid-cols-2` with `gap-8 lg:gap-12`
- **3 Column**: `grid sm:grid-cols-2 lg:grid-cols-3` with `gap-6`
- **4 Column**: `grid sm:grid-cols-2 lg:grid-cols-4` with `gap-4 lg:gap-5`

### Responsive Breakpoints
- **Main Breakpoint**: `lg:` (1024px and above)
- **Secondary**: `sm:` (640px), `md:` (768px), `xl:` (1280px)

## Component Patterns

### Buttons
- **Size**: `text-lg` (18px font)
- **Padding**: `px-4 py-4` or `px-6 py-6`
- **Gap**: `gap-4` between buttons

### Cards
- **Padding**: `p-5` or `px-5 py-5`
- **Border**: `border-1 border-[#83C1AC]`
- **Spacing**: `space-y-4` for list items

## Key Responsive Rules

1. **All sections use `py-10` (40px) on mobile, `lg:py-[54px]` on desktop**
2. **Headings scale from smaller mobile to larger desktop**
3. **Grid layouts stack on mobile, show columns on `lg:` breakpoint**
4. **Text sizes remain consistent, only headings scale**
5. **Spacing increases proportionally on larger screens**

