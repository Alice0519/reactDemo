import React, { useState } from "react";
import { Input, Button, List, Avatar } from "antd-mobile";
import styles from "./index.module.less";
import bannerImage from "@/assets/banner-image.png";

const HomePage = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "你好，我是你的知识伙伴，你可以对我说",
      options: [
        "这个视频讲了什么内容",
        "如何看京东的数据价值",
        "如何看京东的数据价值",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    if (inputValue.trim()) {
      const userMessage = {
        sender: "user",
        text: inputValue,
      };
      setMessages([...messages, userMessage]);

      // 模拟接口调用
      const response = await fetchAnswerFromAPI(inputValue);

      const botMessage = {
        sender: "bot",
        text: response.answer,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setInputValue("");
    }
  };

  const fetchAnswerFromAPI = async (question) => {
    // 模拟API调用，替换为真实API请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ answer: "这是模拟的答案" });
      }, 1000);
    });
  };

  return (
    <div className={styles.chatBox}>
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
      <List className={styles.messageList}>
        {messages.map((message, index) => (
          <List.Item
            key={index}
            className={
              message.sender === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {message.sender === "user" ? (
              <>
                <span className={styles.messageText}>{message.text}</span>
                <Avatar
                  className={styles.avatar}
                  src="https://example.com/user-avatar.png"
                />
              </>
            ) : (
              <>
                <Avatar
                  className={styles.avatar}
                  src="https://example.com/bot-avatar.png"
                />
                <div className={styles.contentWrap}>
                  <span className={styles.messageText}>{message.text}</span>
                  {message.options && (
                    <div className={styles.options}>
                      {message.options.map((option, idx) => (
                        <Button
                          key={idx}
                          size="small"
                          className={styles.optionButton}
                          onClick={() => setInputValue(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </List.Item>
        ))}
      </List>
      <div className={styles.inputContainer}>
        <Input
          value={inputValue}
          onChange={setInputValue}
          placeholder="请输入你的问题"
          className={styles.inputField}
        />
        <Button
          onClick={handleSend}
          color="primary"
          className={styles.sendButton}
        >
          发送
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
