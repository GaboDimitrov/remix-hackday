import { Button, Cell, EmailInput, getMediaQueryFromTheme, Grid, styled, TextInput } from "newskit";
import React from "react";
import { Form, redirect } from "remix";
import { OffSetArea } from "~/components/account/common/offset-area";


export const action = async ({ request }) => {
  const formData = await request.formData();

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");


  // await editName({ firstName, lastName, email });

  return redirect("/account");
};

export default function PersonalDetails() {
  return <OffSetArea offset={true}>
    <Grid>
      <Cell xs={4}>
        <Form method="post">
          <TextInput label='First Name' type="text" name="firstName" />
          <TextInput label='Last Name' type="text" name="lastName" />
          <EmailInput label='Email' type="text" name="email" />
          <Button type="submit">Edit</Button>
      </Form>
      </Cell>
    </Grid>
  </OffSetArea>
}