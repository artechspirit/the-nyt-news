import { formatDateToShortString } from '../utils';

type ArticleCardProps = {
  title: string;
  author: string;
  date: string;
  abstract: string;
  web_url: string;
  isLast?: boolean;
};

export const ArticleCard = ({
  title,
  author,
  date,
  abstract,
  web_url,
  isLast = false,
}: ArticleCardProps) => {
  return (
    <a href={web_url} target="_blank" rel="noopener noreferrer">
      <article
        className={`article-card pb-4 mb-6 ${
          isLast ? '' : 'border-b border-gray-300'
        }`}
      >
        <h2 className="font-headline text-3xl font-bold text-nyt-black leading-snug mb-1">
          {title}
        </h2>

        <div className="text-sm text-nyt-gray mb-2">
          <span className="italic">{author}</span>
        </div>
        <div className="text-sm text-nyt-gray mb-2">
          <span>{formatDateToShortString(date)}</span>
        </div>
        <p className="text-base text-nyt-gray font-body leading-relaxed">
          {abstract}
        </p>
      </article>
    </a>
  );
};
