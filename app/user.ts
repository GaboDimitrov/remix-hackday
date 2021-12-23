import path from 'path';
import fs from 'fs/promises';
import invariant from 'tiny-invariant';

export type Post = { slug: string; title: string };

export type UserAttributes = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    town: string;
    postcode: string;
  };
  commentingPreferences: {
    sms: boolean;
    email: boolean;
    other: boolean;
  };
};

const postsPath = path.join(__dirname, '..', 'user');

function isValidUserAttributes(attributes: any): attributes is UserAttributes {
  return attributes?.firstName;
}

function isValidUpdateUserNameAttributes(
  attributes: any
): attributes is Pick<UserAttributes, 'firstName' | 'lastName' | 'email' | 'title'> {
  return attributes?.firstName && attributes.lastName && attributes.email;
}

function isValidUpdateUserAddressAttributes(attributes: any): attributes is Pick<UserAttributes, 'address'> {
  return attributes?.town && attributes?.postcode;
}

export const getUserSlow = async () => {
  await new Promise((resolve) =>
    setTimeout(async () => {
      resolve(true);
    }, 2000)
  );
  return await getUser();
};

export async function getUser(slug?: string) {
  const filepath = path.join(postsPath, (slug || 'user') + '.json');
  const file = await fs.readFile(filepath);
  const user = JSON.parse(file.toString());
  invariant(isValidUserAttributes(user), `User is missing attributes`);
  return { slug, ...user };
}

export const updateName = async (attributes: Pick<UserAttributes, 'firstName' | 'lastName' | 'email'>) => {
  invariant(isValidUpdateUserNameAttributes(attributes), `form is missing required attributes`);

  const user = await getUser();

  await fs.writeFile(path.join(postsPath, 'user' + '.json'), JSON.stringify({ ...user, ...attributes }));
  return { ...user, ...attributes };
};

export const updateAddress = async (attributes: Pick<UserAttributes, 'address'>) => {
  invariant(isValidUpdateUserAddressAttributes(attributes), `form is missing required attributes`);

  const user = await getUser();

  await fs.writeFile(
    path.join(postsPath, 'user' + '.json'),
    JSON.stringify({ ...user, address: { ...user.address, ...attributes } })
  );
  return { ...user, ...attributes };
};

export const updatePreferences = async (attributes: Pick<UserAttributes, 'commentingPreferences'>) => {
  const user = await getUser();

  await fs.writeFile(
    path.join(postsPath, 'user' + '.json'),
    JSON.stringify({ ...user, commentingPreferences: { ...user.commentingPreferences, ...attributes } })
  );
  return { ...user, ...attributes };
};
