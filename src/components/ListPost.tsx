/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Row, Col, Image, Button } from "antd";
import deleteImg from "../assets/delete.svg";

function ListPost(objeto: { value: any; deletando: any }) {
  console.log(objeto.value);
  return (
    <Row className="listPost">
      <Col span={8}>
        <Image
          className="avatar-img"
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col span={16}>
        <a>
          <img
            style={{ marginLeft: "90%" }}
            onClick={objeto.deletando}
            src={deleteImg}
          />
        </a>

        <div className="mensagem-publicada">{objeto.value.message}</div>
        <div className="enviado-por">Enviado por</div>
        <div className="remetente">{objeto.value.name}</div>
      </Col>
    </Row>
  );
}

export default ListPost;
