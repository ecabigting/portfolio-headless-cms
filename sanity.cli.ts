import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'o2jpyk3u',
    dataset: 'production',
  },
  reactStrictMode: true,
  deployment: {
    autoUpdates: true,
    appId: 'va7jmwol1zv3n1kpqmx6g9us'
  }
})
