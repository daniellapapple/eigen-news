import react, { Component } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Col, Row } from 'antd';

const DetailNews = (props) => {
    let { state } = useLocation();
    console.log(state, 'ini adalah state');
    return (
        <div>
            <Row>
                <Col span={7}></Col>
                <Col span={10} className="detail-news">
                    <Link to="/">&laquo; back to home</Link>
                    <h2>{state.data.title}</h2>
                    <img src={state.data.image} className="img-fluid" width="500" />
                    {state.data.author !== null ? 
                        <p>{state.data.author}</p>
                    : '-' }
                    <p>{state.data.date}</p>
                    <p>{state.data.content}</p>
                </Col>
                <Col span={7}></Col>
            </Row>
        </div>
    )
};

export default DetailNews