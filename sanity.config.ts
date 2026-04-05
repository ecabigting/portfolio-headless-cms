import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'

const singletonType = 'siteSettings'

export default defineConfig({
  name: 'default',
  title: 'portfolio-v2',

  projectId: 'o2jpyk3u',
  dataset: 'production',
  appId: 'va7jmwol1zv3n1kpqmx6g9us',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.documentList()
                  .title('Site Settings')
                  .filter('_type == $type')
                  .params({ type: singletonType })
                  .canHandleIntent(() => true)
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('author').title('Authors'),
            S.documentTypeListItem('category').title('Categories'),
          ]),
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
