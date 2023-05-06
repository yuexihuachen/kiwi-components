import React from "react";
import { Button } from "../src/TestButton";
import {DocsButtonGrid} from './docs'
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: "kiwi/Components/TestButton",
  parameters: {
    /* @ts-ignore */
    component: Button.render,
    tags: ['button', 'ppui', 'react'],
    docs: {
      page: '### base button',
    },
  }
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = () => (
    <DocsButtonGrid>
        <Button>Primary Large 1</Button>
    </DocsButtonGrid>
  )

  export const Secondary: Story = {
    args: {
      label: 'Button',
    },
  };