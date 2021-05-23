import SocialIcons from "../components/social";
import siteConfig from "../siteConfig.json";

export default function Home() {
  return (
    <div className="divide-y divide-gray-400">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <img
            src={siteConfig.site_owner_pic}
            alt="avatar"
            className="w-64 h-64 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Zak Hargreaves
          </h3>
          <div className="text-gray-500 dark:text-gray-400">
            Senior DevOps Engineer
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            Flutter International | Pokerstars
          </div>
          <SocialIcons size={8} />
        </div>
        <div className="pt-8 pb-8 max-w-none xl:col-span-2">
          <p className="text-lg font-bold">Where it all began....</p>
          <br />
          <p>
            This is a strange one, I started my technical journey back in 2008
            when I left high school, I have to admit, I didn’t perform the best,
            but my story gets better! I decided to start my career with an
            apprenticeship in IT, the fact of I didn’t want to be stuck in a
            classroom for the next couple of years of my life didn’t appeal to
            me; I took this opportunity at a local secondary school where I
            learned the basics of client needs and business goals.
          </p>
          <br />
          <p>
            Skip forward 10 years and I’m now working as a Senior DevOps
            Engineer at Flutter Entertainment (originally Pokerstars, but now
            within the International Sports Division) where I’m placed within a
            software team on a greenfield project, I started with a Platform
            Team but soon exhausted my boundaries with that team. I cannot
            believe how fast I have matured, learned, failed, and matured over
            the past years to get into this position - I finally feel like it’s
            my time to share my stories, struggles, hints and tips, guides, Dev
            & Ops challenges along with other tech related things. I’m hoping I
            can share real-world examples to technology rather than those ‘here
            is a basic setup + example config’ guides you see scattered around
            the web - Still, watch this space!
          </p>
        </div>
      </div>
    </div>
  );
}
