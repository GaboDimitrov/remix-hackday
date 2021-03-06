import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { getUser } from '~/user';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');
  return getUser(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
