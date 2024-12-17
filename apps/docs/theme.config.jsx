export default {
  logo: <span>Documentation</span>,
  project: {
    link: 'https://github.com/ai-primitives/workspace-template',
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/workspace-template',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Documentation'
    }
  },
  footer: {
    text: 'Documentation Template',
  }
}
