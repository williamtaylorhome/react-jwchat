import React from "react"
import { IChatProps } from "../../types"
import ChatHeader from "../ChatHeader"
import ChatInput from "../ChatInput"
import ChatRecordList from "../ChatRecordList"
import ScrollWrapper from "../ScrollWrapper"
import style from "./style.module.css"

const textHeight = 150

const WrappedChatRecordList = ScrollWrapper(ChatRecordList)

const defaultChatProps = {
  style: {
    width: 600,
    height: 500,
  },
  contact: {},
  me: {},
  chatList: [],
  onSend: (msg: any) => console.warn("Pass in the on send attribute to receive the content of the input box", msg),
}

export default function Chat(props: IChatProps) {
  const sendHandle = (msgData: any) => {
    props.onSend(msgData)
  }

  const listHeight = props.style.height - textHeight - 60

  return (
    <div className={style.content} style={props.style}>
      <ChatHeader data={props.contact} />
      <WrappedChatRecordList
        {...props}
        data={props.chatList}
        style={{ height: listHeight }}
        scrollToBottom
      />
      <ChatInput
        {...props}
        height={textHeight}
        onSend={sendHandle}
        onImage={props.onImage}
      />
    </div>
  )
}

Chat.defaultProps = defaultChatProps
