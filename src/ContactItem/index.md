---
nav:
  title: Components
  path: /components
---

## Demo

<code src="../../demo/DemoContactItem.tsx"></code>

## API

### Properties

| key     | type    | desc                                                       | required |
| ------- | ------- | ---------------------------------------------------------- | -------- |
| contact | Contact | contact information                                                 | true     |
| border  | boolean | When displaying the bottom separator line of list items, the default is true in the ContactList component. | false    |
| style   | style   | container style                                                   | false    |

### Events

| key     | type | desc                                 | required |
| ------- | ---- | ------------------------------------ | -------- |
| onClick | func | Click callback, the callback parameter contains the current contact information | false    |

## Contact

Contact information object

Example:

```typescript
{
  id: 16,
  avatar: '//game.gtimg.cn/images/lol/act/img/champion/Jinx.png',
  nickname: 'Jinx',
  message: 'this is a message',
  date: '02-11',
  desc: 'A short introduction',
}
```

说明：

| key      | desc                           |
| -------- | ------------------------------ |
| id       | User ID, needs to be unique             |
| avatar   | profile picture                       |
| nickname | User's Nickname                       |
| message  | last message                   |
| date     | Information update time                   |
| desc     | User profile (used to display in the header of the chat box) |
