import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Get } from 'react-axios'
import loadingImg from '../asset/img/icegif-1265.gif'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryDetail = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  return (
  <Container>
    <Row>
      <Col>
        <h1 className="display-4 text-center">The Delicious Food</h1>
        <div className='d-flex flex-wrap pt-3 pb-3 justify-content-center'>
        <Get url={`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.get('category-name')}`} >
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div className="justify-content-center d-flex"><Image src={loadingImg} thumbnail alt="" width="100" /></div>)
            }
            else if(response !== null) {
              return (
                response.data.meals ? response.data.meals.map((item, id) => {
                  return (
                    <Card style={{ width: '18rem', cursor:"pointer" }} className='m-2' onClick={() => {                      
                      navigate(`/meals-detail?meal-id=${item.idMeal}`);
                    }} key={id}>
                      <Card.Img variant="top" src={item.strMealThumb} style={{opacity: 0.76, background: "#ccc"}} />
                      <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                        <Card.Title className='text-center' style={{textShadow: "2px 2px 2px rgba(255,255,255,0.9)"}}>{item.strMeal}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  )
                })                 
                : <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="text-center">
                          <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                            <span className="display-1 fw-bold">4</span>
                            <i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
                            <span className="display-1 fw-bold bsb-flip-h">4</span>
                          </h2>
                          <h3 className="h2 mb-2">Oops! You're lost.</h3>
                          <p className="mb-5">The page you are looking for was not found.</p>
                          <a className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="/" role="button">Back to category</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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

export default CategoryDetail;