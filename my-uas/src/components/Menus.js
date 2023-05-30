import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu }) => {
    return (
        <Col md={6} xs={6} className="mb-4">
            <Card className="sadow">
                <Card.Img
                    variant="top"
                    src={
                        "assets/images/" +
                        menu.category.nama.toLowerCase() +
                        "/" +
                        menu.gambar
                    }
                />
                <Card.Body>
                    <Card.Title>{menu.nama} <strong>({menu.kode})</strong></Card.Title>
                    {/* <Card.Text>
                        {numberWithCommas(menu.harga)}
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus
