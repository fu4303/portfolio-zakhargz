import SocialIcons from '../components/social'

export default function Contact() {
  return (
    <article className="my-auto pt-2 flex-grow mx-auto lg:fixed lg:top-2/4 lg:left-2/4 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
      <div className="divide-y divide-gray-400">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <div className="items-start space-y-2">
          <p className="pt-6">
            I am interested in working with any company that thinks my skill will be helpful for them. If you are
            looking for someone like me, please let me know. Or you can just 'say hi' to me.
          </p>
          <div className="pt-6 ml-25">
            <SocialIcons size={8} />
          </div>
        </div>
      </div>
    </article>
  )
}
