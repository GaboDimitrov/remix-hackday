import { Grid, Cell, TextField, Button, Label, Block, TextBlock } from 'newskit';
import React from 'react';
import { Form, redirect, useLoaderData } from 'remix';
import { OffSetArea } from '~/components/account/common/offset-area';
import { getUserSlow, updateAddress } from '~/user';

export const action = async ({ request }) => {
  const formData = await request.formData();

  const town = formData.get('town') as string;
  const postcode = formData.get('postcode') as string;

  return await updateAddress({ town, postcode });
};

export const loader = () => {
  const user = getUserSlow();

  return user;
};

export default function SubscriptionAndBilling() {
  const { address } = useLoaderData();
  return (
    <OffSetArea offset={true}>
      <Grid>
        <Cell xs={4}>
          <Block spaceStack="space050">
            <TextBlock typographyPreset="editorialHeadline050">Update your address</TextBlock>
          </Block>
          <Form method="post">
            <Label htmlFor="town">Town</Label>
            <TextField id="town" type="text" name="town" defaultValue={address.town} />
            <Label htmlFor="postcode">Postcode</Label>
            <TextField id="postcode" type="text" name="postcode" defaultValue={address.postcode} />
            <Button type="submit">Edit</Button>
          </Form>
        </Cell>
      </Grid>
    </OffSetArea>
  );
}
