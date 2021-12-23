import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import { getPage } from '~/section';
import SectionPage from '~/components/home/section';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.section, 'expected params.section');

  return getPage(params.section);
};

export default function PostSlug() {
  const page = useLoaderData();
  return <SectionPage page={page} isIndexPage={true} />;
}
