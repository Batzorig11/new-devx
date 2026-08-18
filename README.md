# AI-Native Frontend Engineering

12 долоо хоног, 48 хичээл, 96 цагийн багш удирдах сургалтын хөтөлбөр бүхий Next.js application. Хичээл бүр 2 цагийн лекцийн урсгал, дэлгэрэнгүй тайлбар, live demo, ангийн дасгал, ойлголтын checkpoint болон үнэлгээний удирдамжтай.

## Ажиллуулах

```bash
npm install
npm run dev
```

Үндсэн хичээлийн application нь `/`, сургалтын нэгдсэн төлөвлөгөө нь `/curriculum` route дээр ажиллана.

## Бүтэц

```text
app/                         # Route, layout, metadata, global styles
features/
  course/
    components/              # Интерактив хичээлийн жижиг UI components
      sections/              # Plan, materials, assignment sections
    data/                    # Curriculum ба lesson materials
    hooks/                   # Course state, storage, navigation behavior
    lib/                     # Derived lesson content ба constants
    styles/                  # Course route styles
  curriculum/
    components/              # Нэгдсэн төлөвлөгөөний page sections
    data/                    # Page-specific static content
    styles/                  # Curriculum route styles
```

## Шалгалт

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run build:sites
```
