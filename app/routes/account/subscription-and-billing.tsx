import { Grid, Cell, TextInput, Button } from "newskit";
import React from "react";
import { Form, redirect } from "remix";
import { OffSetArea } from "~/components/account/common/offset-area";

export const action = async ({ request }) => {
    const formData = await request.formData();
  
    const town = formData.get("town");
    const postcode = formData.get("postcode");
  
    // await editAddress({ town, postcode });
  
    return redirect("/account");
  };

export default function SubscriptionAndBilling() {
    return <OffSetArea offset={true}>
    <Grid>
      <Cell xs={4}>
        <Form method="post">
          <TextInput label='Town' type="text" name="town" />
          <TextInput label='Postcode' type="text" name="postcode" />
          <Button type="submit">Edit</Button>
      </Form>
      </Cell>
    </Grid>
  </OffSetArea>
  }