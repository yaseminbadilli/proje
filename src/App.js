import React from "react"
import { Container, Row, Col } from 'reactstrap'
import Header from "./Header"
import Menu from "./Menu"
import Categories from './Categories'
import Product from "./Product"
export default function App() {




    return (
        <>
            <Container>
                <Row><Header/></Row>
                <Row><Menu/></Row>
                
                <Row>
                    <Col xs="3"><Categories/></Col>
                    <Col xs="9"><Product/></Col>

                </Row>
                
            </Container>

        </>
    )

}