# Merge Sorted Arrays

A React web app for merging three sorted number arrays into a single ascending array.

## How It Works

The app accepts three collections of numbers:

| Collection | Order |
|---|---|
| Collection 1 | Ascending (min → max) |
| Collection 2 | Descending (max → min) |
| Collection 3 | Ascending (min → max) |

Type numbers into each collection, click **Merge**, and the result is displayed in ascending order.

## Project Structure

```
src/
├── component/
│   └── tagInput/        # Reusable tag input component
├── page/
│   └── sortpage/
│       ├── merge.ts     # Core merge logic
│       └── sort.tsx     # Main page UI
└── merge.test.ts        # Unit tests for merge()
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Running Tests

Tests are written with [Vitest](https://vitest.dev/) and cover the core `merge()` function.

```bash
npm run test
```

### Test cases

| # | Case | Description |
|---|---|---|
| 1 | Happy Path | Merges 3 correctly sorted arrays into one ascending array |
| 2 | Edge Case | All empty arrays returns `[]` |
| 3 | Invalid Input | Unsorted input produces incorrect result (documents expected behavior) |

## Linting

```bash
npm run lint
```
