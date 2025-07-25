export type Keyword = {
  name: string;
  value: string;
  rank: number;
};

export type MultimediaFormat = {
  url: string;
  height: number;
  width: number;
};

export type Multimedia = {
  caption: string;
  credit: string;
  default: MultimediaFormat;
  thumbnail: MultimediaFormat;
};

export type Byline = {
  original: string;
};

export type Headline = {
  main: string;
  kicker: string;
  print_headline: string;
};

export type SortType = 'best' | 'newest' | 'oldest' | 'relevance';

export type Params = {
  q?: string;
  sort?: SortType;
  page?: number;
  begin_date?: string; // format: YYYYMMDD
  end_date?: string;
  fq?: string;
};

export type Article = {
  abstract: string;
  byline: Byline;
  document_type: string;
  headline: Headline;
  _id: string;
  keywords: Keyword[];
  multimedia: Multimedia;
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
};
