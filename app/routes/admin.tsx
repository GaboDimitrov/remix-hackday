import { Outlet, Link, useLoaderData } from "remix";
import {Headline} from 'newskit';

import { getUser } from "~/user";
import type { Post } from "~/user";
import adminStyles from "~/styles/admin.css";

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = () => {
  return getUser();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <nav>
        <Headline kickerText='My'>Admin</Headline>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main><Outlet /></main>
    </div>
  );
}