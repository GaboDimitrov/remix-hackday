import { Button, Cell, Grid, Checkbox, Stack, TextBlock, Block } from "newskit";
import React from "react";
import { Form } from "remix";
import { OffSetArea } from "~/components/account/common/offset-area";
import { updatePreferences } from "~/user";

export const action = async ({ request }) => {
    const formData = await request.formData();
  
    const sms = formData.get("sms");
    const email = formData.get("email");
    const other = formData.get("other");

  
    return await updatePreferences({ sms, email, other });
  };

export default function NewslettersAndAlerts() {
    return <OffSetArea offset={true}>
    <Grid>
      <Cell xs={4}>
      <Block spaceStack='space050'><TextBlock typographyPreset='editorialHeadline050'>Update your newsletter preferences</TextBlock></Block>
        <Form method="post">
            <Stack flow="vertical-left" spaceInline="space020">
                <Checkbox label='sms' type="text" name="sms" />
                <Checkbox label='email' type="text" name="email" />
                <Checkbox label='other' type="text" name="other" />
                <Button type="submit">Edit</Button>
            </Stack>
      </Form>
      </Cell>
    </Grid>
  </OffSetArea>
  }