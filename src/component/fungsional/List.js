import react, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Image } from 'antd';
import { Link } from 'react-router-dom';

const api = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-29&to=2023-01-29&sortBy=popularity&apiKey=decae5e3476e4add938ccdd8d7fc5d8c';

class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: []
        }
    }

    componentDidMount() {
        let self = this;
        axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-01-29&to=2023-01-29&sortBy=popularity&apiKey=decae5e3476e4add938ccdd8d7fc5d8c')
        .then(function (res) {
            self.setState({ value: res.data.articles })
        });
    }

    render() {
        console.log(this.state.value, 'ini adalah value');
        return (
            <div>
                <Row>
                    {this.state.value.length !== 0 ?
                    this.state.value.map((value, index) => 
                    <Col span={6} key={index} className="list-news">
                        <Link to={'/detail/' + index} state={{
                            data: {
                                image: value.urlToImage,
                                title: value.title,
                                author: value.author,
                                date: value.publishedAt,
                                content: value.content
                            }
                        }}>
                            <div>
                                <Image src={value.urlToImage} className='img-fluid rounded' alt={value.urlToImage} />
                                <p>{value.publishedAt}</p>
                                {value.author !== null ?
                                    <p>{value.author}</p> : <p>-</p>
                                }
                                <h3>{value.title}</h3>
                                <p></p>
                            </div>
                        </Link>
                    </Col>
                    ) : 'Sedang mengambil berita...' }
                </Row>
            </div>
        )
    }
};

export default List;