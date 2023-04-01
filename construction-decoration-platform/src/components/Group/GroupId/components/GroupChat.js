import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import groupApi from "../../../../api/groupApi";
import { Input, Button, Form } from "antd";

const GroupChat = () => {
  const [dataMsg, setDataMsg] = useState([]);
  const [msg, setMsg] = useState();

  const [sendMsg, setSendMsg] = useState();

  const { loading, groupDetails, allPosts, Posts } = useSelector(
    (state) => state.groupReducer
  );

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (groupDetails.group_chatroom_id) {
      groupApi
        .getAllMessages(groupDetails.group_chatroom_id)
        .then(({ data }) => {
          setDataMsg(data.data.messages);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [groupDetails.group_chatroom_id, sendMsg]);

  console.log("msg", dataMsg);

  // console.log("data", user.data);

  const handleSend = () => {
    // e.preventDefault();
    let data = {
      type: "text",
      message: msg,
    };
    if (msg) {
      groupApi
        .sendMessage(groupDetails.group_chatroom_id, data)
        .then(({ data }) => {
          setSendMsg(data);
        });
    }
  };

  console.log("sendMsg", sendMsg);

  const handleInput = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div className="GroupChat">
      {/* <div onClick={() => getApi()}>hello</div> */}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[...dataMsg].reverse().map((msg, index) => (
            <div
              className={msg.posted_by_user._id == user.data.id ? "right" : ""}
              style={{
                marginBottom: "10px",
              }}
            >
              {index == 0 ? (
                <div>{msg.message}</div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      src={`${process.env.REACT_APP_API_URL}${msg.posted_by_user.avatar}`}
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "end",
                      }}
                    >
                      {msg.posted_by_user.full_name}
                    </div>
                    <div>{msg.message}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* <Form onFinish={handleSend}> */}
        <form onSubmit={handleSend}>
          <input type="text" onChange={handleInput} />
          {/* <Input placeholder="Basic usage" />
          <Form.Item>
            <Input.Group compact>
              <Input
                onChange={handleInput}
                style={{ width: "calc(100% - 80px)" }}
              />
              <Button type="primary">Submit</Button>
            </Input.Group> */}
            <button>Gửi</button>
          {/* </Form.Item> */}
        </form>
        {/* </Form> */}
      </div>
    </div>
  );
};

export default GroupChat;
