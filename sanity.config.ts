import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio-v2',

  projectId: 'o2jpyk3u',
  dataset: 'production',
  appId: 'va7jmwol1zv3n1kpqmx6g9us',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
