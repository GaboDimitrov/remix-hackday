import { Grid, Cell, TextField, Button, Label, Block, TextBlock } from "newskit";
import React from "react";
import { Form, redirect } from "remix";
import { OffSetArea } from "~/components/account/common/offset-area";
import { updateAddress } from "~/user";

export const action = async ({ request }) => {
    const formData = await request.formData();
  
    const town = formData.get("town") as string;
    const postcode = formData.get("postcode") as string;
  
    return await updateAddress({ town, postcode });
  };

export default function SubscriptionAndBilling() {
    return <OffSetArea offset={true}>
    <Grid>
      <Cell xs={4}>
      <Block spaceStack='space050'><TextBlock typographyPreset='editorialHeadline050'>Update your address</TextBlock></Block>
        <Form method="post">
          <Label htmlFor='town'>Town</Label>
          <TextField id='town' type="text" name="town" />
          <Label htmlFor='postcode'>Postcode</Label>
          <TextField id='postcode' type="text" name="postcode" />
          <Button type="submit">Edit</Button>
      </Form>
      </Cell>
    </Grid>
  </OffSetArea>
  }