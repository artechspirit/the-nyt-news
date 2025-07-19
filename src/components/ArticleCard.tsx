import type { Multimedia } from '../types';
import { formatDateToShortString } from '../utils';
import defaultImage from '../assets/default-image.png';

type ArticleCardProps = {
  title: string;
  author: string;
  date: string;
  abstract: string;
  web_url: string;
  isLast?: boolean;
  multimedia: Multimedia;
};

export const ArticleCard = ({
  title,
  author,
  date,
  abstract,
  web_url,
  isLast = false,
  multimedia,
}: ArticleCardProps) => {
  return (
    <a
      href={web_url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <article
        className={`article-card flex flex-wrap pb-4 mb-6 ${
          isLast ? '' : 'border-b border-gray-300'
        }`}
      >
        <img
          width={multimedia?.default.width || 100}
          height={multimedia?.default.height || 100}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          crossOrigin="anonymous"
          draggable="false"
          referrerPolicy="no-referrer"
          src={multimedia ? multimedia.default.url : defaultImage}
          alt={title}
          className="w-full md:w-1/3 h-48 object-cover"
        />

        <div className="w-full md:w-2/3 md:pl-4">
          <h2 className="font-headline text-3xl font-bold text-nyt-black leading-snug mb-1 md:-mt-2.5 line-clamp-2">
            {title}
          </h2>

          <div className="text-sm text-nyt-gray mb-2">
            <span className="italic">{author}</span>
          </div>
          <div className="text-sm text-nyt-gray mb-2">
            <span>{formatDateToShortString(date)}</span>
          </div>
          <p className="text-base text-nyt-gray font-body leading-relaxed line-clamp-2">
            {abstract}
          </p>
        </div>
      </article>
    </a>
  );
};
