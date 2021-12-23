import { Button, Cell, Grid, Checkbox, Stack, TextBlock, Block } from 'newskit';
import React from 'react';
import { Form, useLoaderData } from 'remix';
import { OffSetArea } from '~/components/account/common/offset-area';
import { getUserSlow, updatePreferences } from '~/user';

export const action = async ({ request }) => {
  const formData = await request.formData();

  const sms = formData.get('sms');
  const email = formData.get('email');
  const other = formData.get('other');

  return await updatePreferences({ sms, email, other });
};

export const loader = () => {
  const user = getUserSlow();

  return user;
};

export default function NewslettersAndAlerts() {
  const { commentingPreferences } = useLoaderData();
  return (
    <OffSetArea offset={true}>
      <Grid>
        <Cell xs={4}>
          <Block spaceStack="space050">
            <TextBlock typographyPreset="editorialHeadline050">Update your newsletter preferences</TextBlock>
          </Block>
          <Form method="post">
            <Stack flow="vertical-left" spaceInline="space020">
              <Checkbox label="sms" name="sms" defaultChecked={commentingPreferences.sms} />
              <Checkbox label="email" name="email" defaultChecked={commentingPreferences.email} />
              <Checkbox label="other" name="other" defaultChecked={commentingPreferences.other} />
              <Button type="submit">Edit</Button>
            </Stack>
          </Form>
        </Cell>
      </Grid>
    </OffSetArea>
  );
}
