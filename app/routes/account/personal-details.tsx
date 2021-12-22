import { Block, Button, Cell, EmailInput, getMediaQueryFromTheme, Grid, Label, styled, TextBlock, TextField, TextInput } from "newskit";
import React from "react";
import { ActionFunction, Form, redirect } from "remix";
import { OffSetArea } from "~/components/account/common/offset-area";
import { updateName } from "~/user";


export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;

  return await updateName({ firstName, lastName, email });
};

export default function PersonalDetails() {
  return <OffSetArea offset={true}>
    <Grid>
      <Cell xs={4}>
      <Block spaceStack='space050'><TextBlock typographyPreset='editorialHeadline050'>Update your personal info</TextBlock></Block>
        <Form method="post">
          <Label htmlFor='firstName'>First Name</Label>
          <TextField id='firstName' type="text" name="firstName" />
          <Label htmlFor='lastName'>Last Name</Label>
          <TextField id='lastName' type="text" name="lastName" />
          <Label htmlFor='Email'>Email Name</Label>
          <TextField id='email' type="email" name="email" />
          <Button type="submit">Edit</Button>
      </Form>
      </Cell>
    </Grid>
  </OffSetArea>
}