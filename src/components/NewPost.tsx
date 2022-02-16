import { Row, Image, Form, Button, Input } from "antd";
import { useState } from "react";

function NewPost(objeto: {
  finalizando: any;
  resetando: any;
  formulario: any;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  function onChangeName(value: any) {
    if (value !== "") {
      setName(value);
    } else {
      setName("");
    }
  }
  function onChangeMessage(value: any) {
    if (value !== "") {
      setMessage(value);
    } else {
      setMessage("");
    }
  }

  return (
    <Row className="newPost">
      <Form onFinish={objeto.finalizando} form={objeto.formulario}>
        <Row>
          <br />
          <Image
            width={"25%"}
            preview={false}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "10px",
              display: "block",
              justifyContent: "center",
            }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <br />
        </Row>

        <Form.Item name={"name"}>
          <Input
            placeholder="Digite seu nome"
            style={{
              background: "#494949",
              borderColor: "#494949",
              fontFamily: "Roboto",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "14px",
              fontStyle: "normal",
              lineHeight: "1.29",
              letterSpacing: "normal",
              textAlign: "left",
              color: "white",
              borderRadius: "8px",
              height: "40px",
            }}
            onChange={onChangeName}
          />
        </Form.Item>
        <Form.Item name={"message"}>
          <Input.TextArea
            placeholder="Mensagem"
            style={{
              background: "#494949",
              borderColor: "#494949",
              fontFamily: "Roboto",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "14px",
              fontStyle: "normal",
              lineHeight: "1.29",
              letterSpacing: "normal",
              textAlign: "left",
              color: "white",
              borderRadius: "8px",
              height: "80px",
            }}
            onChange={onChangeMessage}
          />
        </Form.Item>
        <Form.Item>
          <a className="descartar" onClick={objeto.resetando}>
            <u>Descartar</u>
          </a>
          <Button
            className="btn"
            type="primary"
            htmlType="submit"
            style={{
              background: "#71bb00",
              borderColor: "#71bb00",
              alignContent: "right",
              marginRight: "5%",
            }}
            disabled={!name || !message}
          >
            Publicar
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default NewPost;
