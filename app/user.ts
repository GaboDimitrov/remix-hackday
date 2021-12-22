import path from "path";
import fs from "fs/promises";
import invariant from "tiny-invariant";

export type Post = {slug: string, title: string}

export type UserAttributes = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    town: string;
    postcode: string
  }
  commentingPreferences: {
    sms: boolean
    email: boolean
    other: boolean
  }
};

const postsPath = path.join(__dirname, "..", "user");

function isValidUserAttributes(
  attributes: any
): attributes is UserAttributes {
  return attributes?.firstName;
}

function isValidUpdateUserAddressAttributes(
  attributes: any
): attributes is Pick<UserAttributes, 'address'> {
  return attributes?.town && attributes.postcode ;
}

function isValidUpdateUserNameAttributes(
  attributes: any
): attributes is Pick<UserAttributes, 'firstName'| 'lastName' |  'email'> {
  return attributes?.firstName && attributes.lastName && attributes.email ;
}

export async function getUser(slug?: string) { 
  const filepath = path.join(postsPath, (slug || 'user') + ".json");
  const file = await fs.readFile(filepath);
  const user = JSON.parse(file.toString());
  invariant(
    isValidUserAttributes(user),
    `User is missing attributes`
  );
  return { slug, ...user };
}

export const updateName = async (attributes: Pick<UserAttributes, 'firstName'| 'lastName'| 'email'>) => {
  invariant(
    isValidUpdateUserNameAttributes(attributes),
    `Form  is missing required attributes`
  );
  
  const user = await getUser()

  await fs.writeFile(
    path.join(postsPath, 'user' + ".json"),
    JSON.stringify({...user, ...attributes})
  );
}

// export async function getPosts() {
//   const dir = await fs.readdir(postsPath);
//   return Promise.all(
//     dir.map(async filename => {
//       const file = await fs.readFile(
//         path.join(postsPath, filename)
//       );
//       const { attributes } = parseFrontMatter(
//         file.toString()
//       );
//       invariant(
//         isValidPostAttributes(attributes),
//         `${filename} has bad meta data!`
//       );
//       return {
//         slug: filename.replace(/\.md$/, ""),
//         title: attributes.title
//       };
//     })
//   );
// }