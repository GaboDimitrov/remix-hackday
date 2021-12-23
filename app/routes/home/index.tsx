import { getPage } from '~/section';
import { useLoaderData } from 'remix';
import SectionPage from '~/components/home/section';

export const loader = () => {
  return getPage('homepage');
};

const Index = () => {
  const page = useLoaderData();
  return <SectionPage page={page} />;
};

export default Index;
