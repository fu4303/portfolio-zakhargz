import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import mdxPrism from 'mdx-prism'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const root = process.cwd()
const dataPath = '_content'
type Type = 'posts'

interface IReadTimeResults {
  text: string
  time: number
  words: number
  minutes: number
}

export interface IFileMetadata {
  title: string
  summary: string
  slug: string
  publishedAt: string
  author: string
  wordCount: number
  readingTime: IReadTimeResults
  tags: string[]
}
export interface IFile {
  metadata: IFileMetadata
  source: MDXRemoteSerializeResult | null
}

// Returns file names in directory
export const getFilesInDirectory = async (type: Type) => {
  return fs.readdirSync(path.join(root, dataPath, type))
}

// Returns the contents of a file
const getFileContent = async (type: Type, slug: string) => {
  return fs.readFileSync(path.join(root, dataPath, type, slug), 'utf8')
}

// Returns a single file from directory
export const getFile = async (type: Type, slug: string, withSource?: boolean): Promise<IFile> => {
  const fileContent = await getFileContent(type, slug)
  const { content, data } = matter(fileContent)

  // Convert the `content` into an mdxSource
  const source = withSource
    ? await serialize(content, {
        mdxOptions: {
          remarkPlugins: [
            require('remark-slug'),
            [
              require('remark-autolink-headings'),
              {
                linkProperties: {
                  className: ['anchor'],
                },
              },
            ],
            require('remark-code-titles'),
          ],
          rehypePlugins: [mdxPrism],
        },
      })
    : null

  // Return the File
  return {
    source,
    metadata: {
      ...data,
      slug: slug.replace('.mdx', ''),
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
    } as IFileMetadata,
  }
}

// Returns files from directory
export const getFiles = async (type: Type): Promise<IFile[]> => {
  const files = await getFilesInDirectory(type)

  return await files.reduce(async (acc: Promise<IFile[]>, curr) => {
    const metadata = await getFile(type, curr, false)
    return [...(await acc), { ...metadata }]
  }, Promise.resolve([]))
}
