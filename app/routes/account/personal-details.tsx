import { Button, Cell, EmailInput, getMediaQueryFromTheme, Grid, styled, TextField, TextInput } from "newskit";
import React from "react";
import { ActionFunction, Form, redirect } from "remix";
import { OffSetArea } from "~/components/account/common/offset-area";
import { updateName } from "~/user";


export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;

   await updateName({ firstName, lastName, email });

  return redirect("/account");
};

export default function PersonalDetails() {
  return <OffSetArea offset={true}>
    <Grid>
      <Cell xs={4}>
        <Form method="post">
          <TextField type="text" name="firstName" />
          <TextField type="text" name="lastName" />
          <TextField type="text" name="email" />
          <Button type="submit">Edit</Button>
      </Form>
      </Cell>
    </Grid>
  </OffSetArea>
}