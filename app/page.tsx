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

  const images = [
    { title: 'Skiing in Alpes, France', src: travelpic },
    { title: 'London Docks, UK', src: londonpic },
    { title: "Manchester's History, UK", src: romanpic },
    { title: 'Hiking in the Peak District, UK', src: peakpic },
    { title: 'Exploring the Lake District, UK', src: lakepic },
  ];

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="text-lg leading-6 my-4 mx-2 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-center my-8 flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          height={100}
          priority
        />
        <div className="mt-0 ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nicolasrougefullstack/"
            className="flex items-center gap-2"
          >
            <Image
              alt={'linkedin'}
              className="grayscale"
              src={linkedin}
              placeholder="blur"
              width={22}
              height={22}
              priority
            />
            Linkedin
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/NiCodeRed"
            className="flex items-center gap-2"
          >
            <TwitterIcon /> Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/nicolasrouge"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
      <p className="text-lg leading-6 my-4 mx-2 max-w-[580px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image) => (
          <div key={image.title}>
            <h2 className="text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white shadow-lg">
              {image.title}
            </h2>
            <div className="relative w-full h-64">
              <Image
                style={{
                  borderRadius: '5px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                alt={image.title}
                src={image.src}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/Nick_Co_Wrld"
          >
            <ArrowIcon />
            <p className="h-7">Follow me on Twitter</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
