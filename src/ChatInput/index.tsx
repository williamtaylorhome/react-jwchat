import dayjs from "dayjs"
import md5 from "md5"
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEventHandler,
  useState,
} from "react"
import { IChatInput, IMessage } from "../../types"
import ChatToolBar from "../ChatToolsBar"
import style from "./style.module.css"

export default function ChatInput({
  me,
  onSend = () => {},
  onImage,
  height,
}: IChatInput) {
  const [text, setText] = useState("")
  const [isShift, setIsShift] = useState(false)
  const [isAllowSend, setIsAllowSend] = useState(false)

  const textChangeHandle: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const isAllowSend = !!e.target.value.trim()
    const text = e.target.value

    setText(text)
    setIsAllowSend(isAllowSend)
  }

  const sendHandle = () => {
    if (!isAllowSend) {
      return
    }

    const randomNum = Math.floor(Math.random() * 1000)
    const date = dayjs().unix()

    const msgData: IMessage = {
      _id: md5(`${text}${date}${randomNum}`),
      date: date,
      user: me,
      message: {
        type: "text",
        content: text,
      },
    }
    onSend(msgData)
    resetText()
  }

  const resetText = () => {
    setText("")
    setIsAllowSend(false)
  }

  const keyDownHandle: KeyboardEventHandler = (e) => {
    if (e.keyCode === 16) {
      setIsShift(true)
    }

    if (e.keyCode === 13 && !isShift) {
      e.preventDefault()
      sendHandle()
    }
  }

  const keyUpHandle: KeyboardEventHandler = (e) => {
    if (e.keyCode === 16) {
      setIsShift(false)
    }
  }

  const emojiSelectHandle = (emoji: string) => {
    setText(text + emoji)
    setIsAllowSend(true)
  }

  return (
    <div className={style.content} style={{ height: height }}>
      <ChatToolBar onEmojiSelect={emojiSelectHandle} onImage={onImage} />
      <textarea
        className={style.input_area}
        onKeyUp={keyUpHandle}
        onKeyDown={keyDownHandle}
        onChange={textChangeHandle}
        value={text}
        placeholder="please enter..."></textarea>
      <div className={style.but_area}>
        <button
          className={style.but}
          onClick={sendHandle}
          disabled={!isAllowSend}>
          send
        </button>
      </div>
    </div>
  )
}
