---
nav:
  title: Components
  path: /components
---

## Demo

<code src="../../demo/DemoContactList.tsx"></code>

## API

### Properties

| key   | type      | desc                                          | required |
| ----- | --------- | --------------------------------------------- | -------- |
| data  | contact[] | Contact list, each element in the array is of type contact | true     |
| style | style     | Container style (**height needs to be specified when using**)             | false    |

### Events

| key      | type | desc                                         | required |
| -------- | ---- | -------------------------------------------- | -------- |
| onSelect | func | Selecting a contact triggers a callback, and the parameter is the currently selected contact object. | false    |
