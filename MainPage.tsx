import React, { useState } from "react";
import logo from "../assets/bx-logo.svg";
import "./page.css";
import "../App.css";
import { Form } from "antd";
import NewPost from "../components/NewPost";
import ListPost from "../components/ListPost";

function MainPage() {
  const [form] = Form.useForm();

  interface ListProps {
    name: string;
    message: string;
  }

  const [list, setList] = useState<ListProps[]>([]);

  const onFinish = (values: any) => {
    if (
      typeof values.name !== "undefined" &&
      typeof values.message !== "undefined"
    ) {
      const newPost = Array.from(list);
      newPost.push(values);
      setList(newPost);
      form.resetFields();
    }
  };

  const onDelete = (id: any) => {
    const listCopy = Array.from(list);
    listCopy.splice(id, 1);
    setList(listCopy);
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <body className="page">
        <br />

        <NewPost
          finalizando={onFinish}
          resetando={resetForm}
          formulario={form}
        />

        <p className="feed">Feed</p>
        {list.map((value, id) => (
          <ListPost value={value} key={id} deletando={onDelete} />
        ))}
      </body>
    </div>
  );
}

export default MainPage;
