---
nav:
  title: Components
  path: /components
---

## Demo

<code src="../../demo/DemoChat.tsx"></code>

## API

### Properties

| key     | type    | desc                                         | required |
| ------- | ------- | -------------------------------------------- | -------- |
| contact | Contact | contact information                                   | true     |
| me      | Contact | Personal information                                     | true     |
| style   | style   | Container style (width and height need to be specified when using components) | true     |

### Events

| key       | type | desc                                           | required |
| --------- | ---- | ---------------------------------------------- | -------- |
| onSend    | func | A callback is triggered when a message is sent, and the callback parameter is the assembled message object. | true     |
| onImage   | func | A callback is triggered after selecting a picture. The callback parameter is the picture list.         | true     |
| onEarlier | func | Click to load more callbacks                               | false    |

### Message

message object

Example:

> When the current message is text message,`message.type === 'text'`

```typescript
{
  _id: '75b5bde8f3b9ef7aa9b704492cb28baf',
  date: 1610016580,
  user: {
    id: 1234,
    avatar: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
    nickname: 'sirosong',
    desc: 'This is my first message',
  },
  message: { type: 'text', content: 'The gap between the enemy and our junglers👎 ' },
},
```

> When the current message is text message,`message.type === 'image'`

```typescript
{
  _id: '75b5bde8f3b9ef7aa904492cb28baf',
  date: 1610016880,
  user: {
    id: 9527,
    avatar: '//game.gtimg.cn/images/lol/act/img/champion/Khazix.png',
    nickname: 'Kazik',
    desc: 'This is my first message',
  },
  message: {
    type: 'image',
    content: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
  },
},
```

illustrate:

| key     | desc                               |
| ------- | ---------------------------------- |
| \_id    | The unique identifier of each piece of information, automatically generated within the component |
| date    | Message generation time                       |
| user    | Information about the current message initiator               |
| message | Message content body                       |
