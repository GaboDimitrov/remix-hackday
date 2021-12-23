import {
  Block,
  Button,
  Cell,
  EmailInput,
  getMediaQueryFromTheme,
  Grid,
  Label,
  styled,
  TextBlock,
  TextField,
  TextInput,
} from 'newskit';
import React from 'react';
import { ActionFunction, Form, redirect, useLoaderData } from 'remix';
import { OffSetArea } from '~/components/account/common/offset-area';
import { getUserSlow, updateName } from '~/user';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;

  return await updateName({ firstName, lastName, email });
};

export const loader = () => {
  const user = getUserSlow();

  return user;
};

export default function PersonalDetails() {
  const user = useLoaderData();

  return (
    <OffSetArea offset={true}>
      <Grid>
        <Cell xs={4}>
          <Block spaceStack="space050">
            <TextBlock typographyPreset="editorialHeadline050">Update your personal info</TextBlock>
          </Block>
          <Form method="post">
            <Label htmlFor="firstName">First Name</Label>
            <TextField id="firstName" type="text" name="firstName" defaultValue={user.firstName} />
            <Label htmlFor="lastName">Last Name</Label>
            <TextField id="lastName" type="text" name="lastName" defaultValue={user.lastName} />
            <Label htmlFor="Email">Email </Label>
            <TextField id="email" type="email" name="email" defaultValue={user.email} />
            <Button type="submit">Edit</Button>
          </Form>
        </Cell>
      </Grid>
    </OffSetArea>
  );
}
