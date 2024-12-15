import messages from '../data/messages.json'
import typesImo from "@/components/typesImo.js";

export default () => {
  const types = {}
  messages.forEach(v => {
    if (!types[v.type]) {
      types[v.type] = 0
    }
    types[v.type]++
  })
  delete types.undefined
  delete types[0]
  let items = Object.entries(types)
  items = items.map(v => {
    return {
      tag: v[0],
      value: v[1],
      imo: typesImo[v[0]] ? typesImo[v[0]] : null
    }
  })
  return items
}