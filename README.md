<br />
<br />
<p align="center">
  <img alt="Streamify logo" src="https://d2fplzddl6myl4.cloudfront.net/logo/streamify-logo-purpur.svg" height="100">
</p>
<br />
<h3 align="center">
  Headless Streaming
</h3>
<p align="center">
  No-code solution to build custom streaming platforms.
</p>
<p align="center">
    <a href="https://streamify.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://discord.gg/Qct64q7z">Discord</a>
    ·
    <a href="https://streamify.com">Website</a>
    ·
    <a href="https://github.com/streamify-com/streamify.com/issues">Issues</a>
    ·
    <a href="https://streamifyplus.com/roadmap">Roadmap</a>
  </p>
<br />

> [!NOTE]
> If you are a member/contributor of the Streamify development team, then check out the [wiki](https://github.com/streamify-com/streamify.com/wiki) to get started.

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)

## Requirements

- [Node.js](https://nodejs.org/en/) `Version +18`
- [pnpm](https://pnpm.io/) `Version +6`
- [Turbo](https://turbo.build/) `Version +1.10`
- [TypeScript](http://typescriptlang.org) `Version +5`

Check versions:

```
node -v && pnpm -v && turbo --version && tsc -v
```

## Installation

1. Copy the `.env.example` to `.env` and update the variables.
```
cp .env.example .env
```
2. Install all dependencies and build all apps and packages
```
pnpm install && pnpm build
```

3. Running all projects locally
```
pnpm dev
```

## Features to be implemented

### Core
[ ] Drag and drop functionality with dnd-kit

### Template - OTT
[ ] Custom checkout and payment infrastructure with Stripe
[ ] Email workflow with Resend
[ ] Newsletter functionality with Resend
[ ] Video CMS with Mux, LiveKit, Brightcove, Vidstack
[ ] Authentication with Clerk
[ ] User management with Clerk
[ ] i18n with next-intl
[ ] adjustable Metadata and Viewport with Next.js 14
