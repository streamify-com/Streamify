<br />
<br />
<p align="center">
  <img alt="Streamify logo" src="https://d2fplzddl6myl4.cloudfront.net/logo/streamify-logo-purpur.svg">
</p>
<br />
<h3 align="center">
  Headless Streaming
</h3>
<p align="center">
  No-code solution to build custom streaming platforms. Our mission: Become the Shopify of streaming 🌪️
</p>
<p align="center">
  All-in-One • Drag-and-Drop • Collaborative-and-Interactive
</p>
<p align="center">
    <a href="https://streamifyplus.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://discord.gg/Qct64q7z">Discord</a>
    ·
    <a href="https://streamifyplus.com">Website</a>
    ·
    <a href="https://github.com/streamify-com/streamify-core/issues">Issues</a>
    ·
    <a href="https://streamifyplus.com/roadmap">Roadmap</a>
  </p>
<br />

## Table of contents

- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Installation](#installation)
- [Build](#build)
  - [Turbo configuration](#turbo-configuration)
  - [Remote Caching](#remote-caching)
- [Useful Links](#useful-links)
- [Documentation](#documentation)
- [Ressources](#ressources)
  - [Tools](#tools)
- [License](#license)

## Requirements

- [Node.js](https://nodejs.org/en/) `Version +18`
- [pnpm](https://pnpm.io/) `Version +6`
- [Turbo](https://turbo.build/) `Version +1.10`
- [TypeScript](http://typescriptlang.org) `Version +5`

Check versions:

```
node -v && pnpm -v && turbo --version && tsc -v
```

### Turbo configuration

This repository is a monorepo using [Turborepo](https://turbo.build/repo). To install Turbo run:

```
pnpm install turbo --global
```

## Installation

Install all dependencies and build all apps and packages

```
pnpm install && pnpm build
```

Develop all apps and packages

```
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Documentation

Start Prisma Studio

```
yarn db-studio
```

## Ressources

### Tools

<table>
  <tbody>
    <tr>
        <td align="center" valign="middle">
        <a target="_blank" href="https://www.figma.com/team_invite/redeem/UZ8N4xEsrMlVM1raCdzY89">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="25" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ffb77e93c28e044178e4694cc939bf4cf" />
          <p align="center">
            Mockups & UX/UI-Design
          </p>
        </a>
      </td>
      <td align="center" valign="middle">
        <a target="_blank" href="https://tailwindui.com/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
          <p align="center">
            CSS Library (`Request Access`)
          </p>
        </a>
      </td>
      <td align="center" valign="middle">
        <a target="_blank" href="https://icones.js.org/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7c16907175964f5dada038f6cceef77b" />
          <p align="center">
            Icônes
          <p>
        </a>
      </td>
      <td align="center" valign="middle">
        <a target="_blank" href="https://www.notion.so/invite/a466f04c2c55b28f5517589a17a2de646ec27e19">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" />
          <p align="center">
            Notes
          </P>
        </a>
      </td>
      <td align="center" valign="middle">
        <a target="_blank" href="https://discord.gg/pC2g2CXc">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" />
          <p align="center">
            Communication
          </p>
        </a>
      </td>
      <td align="center" valign="middle">
        <a target="_blank" href="https://streamify-com.signin.aws.amazon.com/console">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" />
          <p align="center">
            Cloud (`Request Access`)
          </p>
        </a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a target="_blank" href="https://dashboard.stripe.com/developers">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" />
          <p align="center">
            Payment (`Request Access`)
          </p>
        </a>
      </td>
      <td align="center" valign="middle">
        <a target="_blank" href="https://outlook.office.com/mail/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="500" height="1" />
          <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" />
          <p align="center">
            Dev email (`Request Access`)
          </p>
        </a>
      </td>
    </tr>
  </tbody>
</table>


## License

© 2023 Votan Enterprise UG (haftungsbeschraenkt). Code and repository are property of Votan Enterprise and it's affliates.
