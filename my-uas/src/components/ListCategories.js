import React, { Component } from 'react'
import { Col, ListGroup } from "react-bootstrap";
import axios from 'axios';
import { API_URL } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ nama }) => {
    if (nama === "Beranda")
        return <FontAwesomeIcon className="mr-2" />;
    if (nama === "Data Penambahan Sampah") return <FontAwesomeIcon />;
    if (nama === "Data Sampah Penuh")
        return <FontAwesomeIcon className="mr-2" />;

    return <FontAwesomeIcon className="mr-2" />;
};

export default class ListCategories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios
            .get(API_URL + "categories")
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
            .catch(error => {
                console.log("Error yaaa: ", error);
            })
    }

    render() {
        const { categories } = this.state
        const { changeCategory, categoriYangDipilih } = this.props
        return (
            <Col md={2} mt="2">
                <h4><strong>Menu</strong></h4>
                <hr />
                <ListGroup>
                    {categories && categories.map((category) => (
                        <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)}
                        className={categoriYangDipilih === category.nama && "category-aktif"}
                        style={{cursor: 'pointer'}}>
                            <h5>
                                <Icon nama={category.nama} /> {category.nama}
                            </h5>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        )
    }
}