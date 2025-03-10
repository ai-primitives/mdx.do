# MDX.do

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A platform for managing content with MDX+LD - a powerful integration of Markdown, JSX, and Linked Data.

## What is MDX+LD?

MDX+LD brings together:
- **Unstructured content** via Markdown
- **Typed schemas** via JSON-LD/YAML-LD
- **Structured data** via YAML frontmatter
- **Executable code** via JavaScript/TypeScript
- **UI components** via JSX/React

Learn more at [mdxld.org](https://mdxld.org).

## Features

- 🏗️ Modern TypeScript monorepo with pnpm workspaces and Turborepo
- 📄 Content management for MDX+LD documents
- 🔗 Support for Linked Data integration (JSON-LD and YAML-LD)
- 🌐 Web application for content editing and management
- 📚 Documentation site built with Nextra
- 🔧 Shared ESLint and TypeScript configurations
- 🎨 Consistent code formatting with Prettier
- 🔄 CI/CD with GitHub Actions

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ai-primitives/mdx.do.git
cd mdx.do

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev

# Run tests
pnpm test

# Lint code
pnpm lint
```

## Workspace Structure

```
.
├── apps/              # Applications
│   ├── docs/          # Documentation site (Nextra)
│   └── web/           # Web application (Next.js)
├── packages/          # Package implementations
│   ├── api/           # Cloudflare Worker API
│   └── example-ui/    # Shared UI components
├── utilities/         # Shared configurations
│   ├── eslint-config/
│   ├── prettier-config/
│   └── tsconfig/
├── pnpm-workspace.yaml
└── turbo.json
```

## Using MDX+LD

MDX+LD allows you to create content with both rich formatting and structured data:

```mdx
---
$context: https://schema.org
$type: BlogPosting
title: My First MDX-LD Post
author:
  $type: Person
  name: Jane Smith
  url: https://example.com/jane
---

# {frontmatter.title}

Written by [{frontmatter.author.name}]({frontmatter.author.url})

Your MDX content here...
```

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) to learn about our development process and how to propose bugfixes and improvements.

## License

MIT © [AI Primitives](https://mdxld.org)

## Dependencies

This workspace uses the following key dependencies:

- pnpm for package management
- Turborepo for build orchestration
- Next.js for web applications
- Nextra for documentation
- TypeScript for static typing
- ESLint for linting
- Prettier for code formatting
