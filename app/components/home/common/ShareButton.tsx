import React from 'react';
import { Button, IconFilledShare } from 'newskit';

const ShareButton = () => (
  <Button size="small" overrides={{ stylePreset: 'buttonOutlinedPrimary' }} href="https://www.newskit.co.uk/">
    <IconFilledShare />
    Share
  </Button>
);
export default ShareButton;
