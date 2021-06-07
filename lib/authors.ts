import authors from '../_content/metadata/authors.json'

export type AuthorContent = {
  readonly slug: string
  readonly name: string
  readonly bio: string
  readonly profile_pic: string
}

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap()

function generateAuthorMap(): { [key: string]: AuthorContent } {
  let result: { [key: string]: AuthorContent } = {}
  for (const author of authors.authors) {
    result[author.slug] = author
  }
  return result
}

export function getAuthor(slug: string) {
  return authorMap[slug]
}
