import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import {
  name, about, bio, avatar, travelpic, blackpoolpic,
  lakepic,
  londonpic,
  mannypic,
  manny2pic,
  mannyskypic,
  peakpic,
  romanpic,
  surfpic
} from 'lib/info';
import linkedin from '../public/images/linkedin.png';


export const revalidate = 60;

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="text-lg leading-6 my-4 mx-2  max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-center my-8 flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-0 ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nicolas-rouge777/"
            className="flex items-center gap-2"
          >
            <Image
              alt={'linkedin'}
              className="grayscale"
              src={linkedin}
              placeholder="blur"
              width={22}
              priority
            />
            Linkedin
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/nick_co_wrld"
            className="flex items-center gap-2"
          >
            <TwitterIcon /> Twitter
            {/* {`${tweetCount} tweets all time`} */}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/nicolasrouge"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            GitHub
            {/* {`${starCount.toLocaleString()} stars on this repo`} */}
          </a>
          {/* <Link href="/blog" className="flex items-center">  <ViewsIcon /> Blog  {`${views.toLocaleString()} blog views all time`} </Link> */}
        </div>
        <p style={{ maxWidth: "200px", marginLeft: "20px", color: "#FF4C29" }}>
          {/* <a href="https://gatsbyitskills.gatsbyjs.io/"><u><b><i>💹Check my graph of UK tech job market 👀</i></b></u></a> */}
        </p>
        {/* <Image
          alt={name}
          className="rounded-full"
          src={rocket}
          placeholder="blur"
          width={80}
          priority
          style={{marginLeft: '30px'}}
        /> */}
      </div>
      <p className="text-lg leading-6 my-4 mx-2  max-w-[580px] text-neutral-800 dark:text-neutral-200">
        {bio()}
        <br />
        <br />
        Alpes 🏔️:
        <Image
          style={{
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
          alt={name}
          src={travelpic}
          placeholder="blur"
          width={400}
          priority
        />

London Docks:
        <Image
          style={{
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
          alt={name}
          src={londonpic}
          placeholder="blur"
          width={400}
          priority
        />
        Modern Manchester:   

        <Image
          style={{
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
          alt={name}
          src={mannyskypic}
          placeholder="blur"
          width={400}
          priority
        />

Manchester's layers of history: < br/> (Roman ruins, industrial revolution, modern buildings)
<Image
          style={{
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
          alt={name}
          src={romanpic}
          placeholder="blur"
          width={400}
          priority
        />
Peak District hike (early in the morning):
<Image
          style={{
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
          alt={name}
          src={peakpic}
          placeholder="blur"
          width={400}
          priority
        />
Lake District expedition:
        <Image
          style={{
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
          alt={name}
          src={lakepic}
          placeholder="blur"
          width={400}
          priority
        />
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/Nick_Co_Wrld"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        {/* <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
