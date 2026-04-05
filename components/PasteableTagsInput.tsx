import { defineField } from 'sanity'
import { TagsArrayInput } from 'sanity'
import { set, PatchEvent } from 'sanity'
import { ComponentType } from 'react'

function PasteableTagsInput(props: any) {
  const { value = [], onChange } = props

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text')
    
    const tags = text
      .split(/[,\n]/)
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
    
    const newTags = tags.filter(tag => !value.includes(tag))
    const allTags = [...value, ...newTags]
    
    onChange(PatchEvent.from(set(allTags)))
  }

  return (
    <div onPaste={handlePaste}>
      <TagsArrayInput {...props} />
    </div>
  )
}

export const pasteableTagsField = defineField({
  name: 'pasteableTags',
  title: 'Pasteable Tags',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    layout: 'tags',
  },
  components: {
    input: PasteableTagsInput as ComponentType<any>,
  },
})
