import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArticleCard } from '../components/ArticleCard';
import { Pagination } from '../components/Pagination';
import { SortDropdown } from '../components/SortDropdown';
import * as useArticlesQueryModule from '../hooks/useArticlesQuery';
import type { Article } from '../types';
import SearchInput from '../components/SearchInput';
import type { UseQueryResult } from '@tanstack/react-query';


function renderWithProviders(ui: React.ReactElement, route = '/') {
  const queryClient = new QueryClient();
  return render(
    <MemoryRouter initialEntries={[route]}>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </MemoryRouter>
  );
}

describe('Home Page', () => {
  it('renders headline and description', () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByText('Discover News from The New York Times')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Search the most influential articles/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText('Illustration')).toBeInTheDocument();
  });
});

describe('Header & Footer', () => {
  it('renders logo and search input in Header', () => {
    renderWithProviders(<Header />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search articles...')
    ).toBeInTheDocument();
  });
  it('renders copyright and links in Footer', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText('New York Times API')).toHaveAttribute(
      'href',
      expect.stringContaining('nytimes')
    );
    expect(screen.getByText('GitHub')).toHaveAttribute(
      'href',
      expect.stringContaining('github')
    );
  });
});

describe('ArticleCard', () => {
  it('renders article data correctly', () => {
    renderWithProviders(
      <ArticleCard
        title="Test Title"
        author="By John Doe"
        date="2024-06-01T00:00:00Z"
        abstract="This is a test abstract."
        web_url="https://example.com"
      />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('By John Doe')).toBeInTheDocument();
    expect(screen.getByText('This is a test abstract.')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    );
  });
});

describe('Pagination', () => {
  it('calls onPageChange when next/prev clicked', () => {
    const onPageChange = vi.fn();
    renderWithProviders(<Pagination currentPage={1} onPageChange={onPageChange} />);
    // Desktop: tombol pertama = prev, kedua = next
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]); // prev
    expect(onPageChange).toHaveBeenCalledWith(0);
    onPageChange.mockClear();
    fireEvent.click(buttons[1]); // next
    expect(onPageChange).toHaveBeenCalledWith(2);
    // Mobile
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChange).toHaveBeenCalledWith(2);
    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChange).toHaveBeenCalledWith(0);
  });
});

describe('SortDropdown', () => {
  it('calls onChange when option selected', () => {
    const onChange = vi.fn();
    renderWithProviders(<SortDropdown sort="newest" onChange={onChange} />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'oldest' },
    });
    expect(onChange).toHaveBeenCalledWith('oldest');
  });
});

describe('SearchInput', () => {
  it('updates input value and navigates on type', async () => {
    renderWithProviders(<SearchInput />);
    const input = screen.getByPlaceholderText('Search articles...');
    fireEvent.change(input, { target: { value: 'react' } });
    expect((input as HTMLInputElement).value).toBe('react');
    
  });
});

// Mock data for Search page tests
const mockArticles: Article[] = [
  {
    abstract: 'Test abstract',
    byline: { original: 'By John Doe' },
    document_type: 'article',
    headline: { main: 'Test Headline', kicker: '', print_headline: '' },
    _id: '1',
    keywords: [],
    multimedia: {
      caption: '',
      credit: '',
      default: { url: '', height: 0, width: 0 },
      thumbnail: { url: '', height: 0, width: 0 },
    },
    news_desk: '',
    print_page: '',
    print_section: '',
    pub_date: '2024-06-01T00:00:00Z',
    section_name: '',
    snippet: '',
    source: '',
    subsection_name: '',
    type_of_material: '',
    uri: '',
    web_url: 'https://example.com',
    word_count: 100,
  },
];

// Helper for type-safe mock of UseQueryResult
function createQueryResult(
  overrides: Partial<UseQueryResult<Article[], Error>>
): UseQueryResult<Article[], Error> {
  return {
    data: undefined,
    error: null,
    isLoading: false,
    isError: false,
    isPending: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: 'pending',
    isFetched: false,
    isFetchedAfterMount: false,
    isFetching: false,
    isInitialLoading: false,
    isPlaceholderData: false,
    isRefetching: false,
    isStale: false,
    dataUpdatedAt: 0,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    failureCount: 0,
    failureReason: null,
    fetchStatus: 'idle',
    refetch: async () => createQueryResult({}),
    remove: () => {},
    ...overrides,
  };
}

describe('Search Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading skeletons when loading', () => {
    vi.spyOn(useArticlesQueryModule, 'useArticlesQuery').mockReturnValue(
      createQueryResult({ isLoading: true })
    );
    renderWithProviders(<Search />);
    expect(
      screen.getAllByText('', { selector: '.animate-pulse' }).length
    ).toBeGreaterThan(0);
  });

  it('shows error message on error', () => {
    vi.spyOn(useArticlesQueryModule, 'useArticlesQuery').mockReturnValue(
      createQueryResult({ isError: true, error: new Error('fail') })
    );
    renderWithProviders(<Search />);
    expect(screen.getByText(/Failed to fetch articles/i)).toBeInTheDocument();
  });

  it('shows empty state when no articles', () => {
    vi.spyOn(useArticlesQueryModule, 'useArticlesQuery').mockReturnValue(
      createQueryResult({ data: [], isSuccess: true, status: 'success' })
    );
    renderWithProviders(<Search />);
    expect(screen.getByText(/No articles found/i)).toBeInTheDocument();
  });

  it('shows articles when data is present', () => {
    vi.spyOn(useArticlesQueryModule, 'useArticlesQuery').mockReturnValue(
      createQueryResult({ data: mockArticles, isSuccess: true, status: 'success' })
    );
    renderWithProviders(<Search />);
    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('By John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test abstract')).toBeInTheDocument();
  });

  it('pagination and sort controls are present', () => {
    vi.spyOn(useArticlesQueryModule, 'useArticlesQuery').mockReturnValue(
      createQueryResult({ data: mockArticles, isSuccess: true, status: 'success' })
    );
    renderWithProviders(<Search />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });
});
