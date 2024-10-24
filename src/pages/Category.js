import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Get } from 'react-axios'
import loadingImg from '../asset/img/icegif-1265.gif'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  return (
  <Container>
    <Row>
      <Col>
        <h1 className="display-4 text-center">The Delicious Food</h1>
        <div className='d-flex flex-wrap pt-3 pb-3 justify-content-center'>
        <Get url="https://www.themealdb.com/api/json/v1/1/categories.php" >
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div className="justify-content-center d-flex"><Image src={loadingImg} thumbnail alt="" width="100" /></div>)
            }
            else if(response !== null) {
              return (
                response.data.categories.map((item, id) => {
                  return (
                    <Card style={{ width: '18rem', cursor:"pointer" }} className='m-2' onClick={() => {                      
                      navigate(`/category-detail?category-name=${item.strCategory}`);
                    }} key={id}>
                      <Card.Img variant="top" src={item.strCategoryThumb} style={{opacity: 0.76, background: "#ccc"}} />
                      <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                        <Card.Title className='text-center' style={{textShadow: "2px 2px 2px rgba(255,255,255,0.9)"}}>{item.strCategory}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  )
                })                   
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
        </div>
      </Col>
    </Row>
  </Container>
  )
};

export default Category;