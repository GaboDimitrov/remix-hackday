import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.section, "expected params.section");
  return params.section;
};

export default function PostSlug() {
  const sectionId = useLoaderData();
  return (
    <div>
    {sectionId}
    </div>
  );
}