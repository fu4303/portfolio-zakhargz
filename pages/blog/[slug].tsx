import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getFile, getFilesInDirectory, IFile } from '../../lib/blogResources'
import dayjs from 'dayjs'
import Image from 'next/image'
import { getAuthor } from '../../lib/authors'

const editUrl = (slug: string) => `https://github.com/ZakHargz/hrgs-blog-dev/edit/main/data/blog/${slug}.mdx`
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://hrgs.dev/blog/${slug}`)}`

interface BlogPostProps {
  post: IFile
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <>
      <article className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full pt-12">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {post.metadata.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image src={getAuthor(post.metadata.author).profile_pic} height={24} width={24} className="rounded-full" />
            <p className="text-sm text-gray-500 ml-2">
              {getAuthor(post.metadata.author).name}
              {' • '}
              <time dateTime={post.metadata.publishedAt}>
                {dayjs(post.metadata.publishedAt).locale('en-gb').format('dddd, DD MMM YYYY')}{' '}
              </time>
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">{post.metadata.readingTime.text}</p>
        </div>
        <div className="prose dark:prose-dark max-w-4xl w-full mx-auto">
          <MDXRemote {...(post.source as MDXRemoteSerializeResult)} />
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300 pt-14">
          <a href={discussUrl(post.metadata.slug)} target="_blank" rel="noopener noreferrer">
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a href={editUrl(post.metadata.slug)} target="_blank" rel="noopener noreferrer">
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getFilesInDirectory('posts')
  return {
    paths: paths.map((path) => ({ params: { slug: path.replace('.mdx', '') } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFile('posts', `${params?.slug}.mdx`, true)
  return { props: { post } }
}

export default BlogPost
