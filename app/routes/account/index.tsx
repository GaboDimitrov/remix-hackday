import { Stack, TextBlock } from "newskit";
import React from "react";
import { useLoaderData } from "remix";
import { getUser } from "~/user";

export const loader = () => {
    const user = getUser();
    return user
  }
  
export default function Account() {
  const {firstName, lastName, email, address, commentingPreferences} = useLoaderData();
    return (<Stack stackDistribution='space-between' flow='vertical-center' spaceInline="space020">
        <TextBlock typographyPreset='editorialHeadline050'>Personal Info</TextBlock>
        <TextBlock>Name: {firstName} {lastName}</TextBlock>
        <TextBlock>Email: {email}</TextBlock>
        <TextBlock>Address: {address.town} {address.postcode}</TextBlock>
        {(commentingPreferences.sms || commentingPreferences.email || commentingPreferences.other) &&
        <TextBlock typographyPreset='editorialHeadline050'>Subscribed for newsletter by</TextBlock>}
        {commentingPreferences.sms && <TextBlock>SMS</TextBlock>}
        {commentingPreferences.email && <TextBlock>Email</TextBlock>}
        {commentingPreferences.other &&<TextBlock>Other</TextBlock>}

    </Stack>)
}