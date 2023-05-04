import { Button } from "./TestButton";
import {DocsButtonGrid} from './docs'

export default {
  title: "Example/TestButton",
  parameters: {
    /* @ts-ignore */
    component: Button.render,
    tags: ['button', 'ppui', 'react'],
    docs: {
      page: '### base button',
    },
  }
};


export const Basic = () => (
    <DocsButtonGrid>
        <Button>Primary Large</Button>
    </DocsButtonGrid>
  )