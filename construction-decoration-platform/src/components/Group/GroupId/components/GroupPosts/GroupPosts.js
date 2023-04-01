import React, { useState, useEffect } from "react";
import "./GroupPosts.scss";
import { useDispatch, useSelector } from "react-redux";
import uploadApi from "../../../../../api/uploadImage";
import groupApi from "../../../../../api/groupApi";
import { postNew } from "../../../../../redux/reducers/group";
import moment from "moment";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
  Radio,
} from "antd";

import { openNotification } from "../../../../Alert/AlertProduct";
import IconNews from "../../../../../components/IconNews/IconNews";

const GroupPosts = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState();
  const { loading, groupDetails, allPosts } = useSelector(
    (state) => state.groupReducer
  );
  const { user } = useSelector((state) => state.userReducer);

  console.log("allPosts", allPosts);

  // useEffect(async () => {
  //   const res = await groupApi.getAllComment(allPosts.team_id,allPosts.id);
  //   setComment(res);
  // }, []);

  // console.log("comment",comment);

  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();

  const handleImage = async (e) => {
    for (const key of Object.keys(e.target.files)) {
      formData.append("files", e.target.files[key]);
    }
    try {
      const res = await uploadApi(formData);
      // setSeleted(res.url[0])
      console.log("res", res);
      setValue({ ...value, [e.target.name]: res.url });
      // notifySuccess();
      if ((res.message = "Success")) {
        openNotification("success", "Upload ảnh thành thành công");
      }
    } catch (error) {
      console.log(error);
      // notifyError("Upload ảnh không thành công");
      openNotification("error", "Upload ảnh không thành công");
    }
  };

  const [newProductForm, setNewProductForm] = useState({
    desc: "",
  });

  const { desc } = newProductForm;

  const onChangeProductForm = (e) => {
    setNewProductForm({ ...newProductForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let data = {
      team_id: groupDetails.id,
      content: desc,
      //image
      image_url: value.image_url,
    };

    try {
      const res = dispatch(postNew(data));

      if ((res.message = "Success")) {
        setNewProductForm("");
        setValue("");
        data = "";
      }
      return res.message;
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="GroupPosts">
      <div className="GroupPosts__C">
        <img
          src={`${process.env.REACT_APP_API_URL}/${user.data.avatar}`}
          alt="error image user"
        />
        <div
          style={{
            width: "100%",
          }}
        >
          <Form
            labelCol={
              {
                //   span: 4,
              }
            }
            wrapperCol={
              {
                //   span: 20
              }
            }
            layout="horizontal"
            // onValuesChange={onFormLayoutChange}
            // disabled={componentDisabled}
            onFinish={handleSubmit}
          >
            <Form.Item>
              <Typography.Title level={5}>Mô Tả</Typography.Title>

              <Input.TextArea
                rows={4}
                placeholder="Mô Tả"
                onChange={onChangeProductForm}
                name="desc"
                value={desc}
              />
            </Form.Item>
            <Form.Item>
              <Row justify="space-between" align="middle">
                <Col span={11} className="">
                  <Form.Item>
                    <Typography.Title level={5}>Hình ảnh</Typography.Title>

                    <div className="">
                      <div className="">
                        <label htmlFor="1232aasd">
                          <img alt="Upload" />
                        </label>
                        <br />
                        <input
                          className=""
                          onChange={handleImage}
                          type="file"
                          name="image_url"
                          accept="image/*"
                          id="1232aasd"
                          style={{ display: "none" }}
                          multiple
                        />
                        {value.image_url && (
                          <div className="">
                            {value.image_url.map((image, index) => (
                              <img
                                src={`${process.env.REACT_APP_API_URL}/${image}`}
                                alt=""
                                key={index}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Form.Item>
                </Col>

                <Col span={11} className="d-flex justify-end">
                  <Button type="primary" htmlType="submit">
                    Tạo
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="GroupPosts__All">
        {allPosts.map((el) => (
          <div className="GroupPosts__All__C" key={el.id}>
            <div className="GroupPosts__All__C__User">
              <div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/${el.customer.avatar}`}
                  alt="error"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                />
                {/* <img src={el.customer.avatar} alt="error" /> */}
              </div>
              <div>
                <div className="GroupPosts__All__C__User__Name">
                  {el.customer.full_name}
                </div>
                <div>{moment(el.created_date).format("LLL")}</div>
              </div>
            </div>
            <div className="GroupPosts__All__Content">
              <div>{el.content}</div>
              <div>
                {el.image_url &&
                  el?.image_url?.map((item) => (
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${item.url}`}
                      alt="error image user"
                      style={{
                        width: "200px",
                        height: "200px",
                        marginRight: "20px",
                      }}
                    />
                  ))}
              </div>
            </div>
            <div className="GroupPosts__All__React">
              <IconNews el={el} />
            </div>
            <div className="GroupPosts__All__Comment">
              <div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/${el.customer.avatar}`}
                  alt="error"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                />
              </div>
              <div className="GroupPosts__All__Comment__Input">
                <form>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="GroupPosts__All__Comment__User">hehe</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupPosts;
