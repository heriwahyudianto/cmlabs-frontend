import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Get } from 'react-axios'
import loadingImg from '../asset/img/icegif-1265.gif'
import Image from 'react-bootstrap/Image';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import ReactPlayer from 'react-player'

const MealsDetail = () => {
  const [params] = useSearchParams();

  return (
    <Container>
      <Row>
        <Col>        
          <Get url={`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.get('meal-id')}`} >
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
                      <div key={id}>
                        <h1 className="display-4">{item.strMeal}</h1>
                        <hr></hr>
                        <div style={{color: 'red'}}>{item.strArea} Cullinary</div>  
                        
                        <div className='d-flex justify-content-center m-4'>
                        <Figure>
                          <Figure.Image
                            width="auto"
                            height="auto"
                            alt={item.strMeal}
                            src={item.strMealThumb}
                          />
                          <Figure.Caption>
                          {item.strMeal}
                          </Figure.Caption>
                        </Figure>
                        </div> 
                        <h2>Instructions</h2>
                        <p
                          dangerouslySetInnerHTML={{__html: item.strInstructions}}
                        />
                        <h2>Ingredient</h2>
                        <ul>
                        <li>{item.strMeasure1} {item.strIngredient1}</li>
                        <li>{item.strMeasure2} {item.strIngredient2}</li>
                        <li>{item.strMeasure3} {item.strIngredient3}</li>
                        <li>{item.strMeasure4} {item.strIngredient4}</li>
                        <li>{item.strMeasure5} {item.strIngredient5}</li>
                        <li>{item.strMeasure6} {item.strIngredient6}</li>
                        <li>{item.strMeasure7} {item.strIngredient7}</li>
                        {item.strIngredient8 === '' ? null : <li>{item.strMeasure8} {item.strIngredient8}</li>}
                        {item.strIngredient9 === '' ? null : <li>{item.strMeasure9} {item.strIngredient9}</li>}
                        {item.strIngredient10 === '' ? null : <li>{item.strMeasure10} {item.strIngredient10}</li>}
                        {item.strIngredient11 === '' ? null : <li>{item.strMeasure11} {item.strIngredient11}</li>}
                        {item.strIngredient12 === '' ? null : <li>{item.strMeasure12} {item.strIngredient12}</li>}
                        {item.strIngredient13 === '' ? null : <li>{item.strMeasure13} {item.strIngredient13}</li>}
                        {item.strIngredient14 === '' ? null : <li>{item.strMeasure14} {item.strIngredient14}</li>}
                        {item.strIngredient15 === '' ? null : <li>{item.strMeasure15} {item.strIngredient15}</li>}
                        {item.strIngredient16 === '' ? null : <li>{item.strMeasure16} {item.strIngredient16}</li>}
                        {item.strIngredient17 === '' ? null : <li>{item.strMeasure17} {item.strIngredient17}</li>}
                        {item.strIngredient18 === '' ? null : <li>{item.strMeasure18} {item.strIngredient18}</li>}
                        {item.strIngredient19 === '' ? null : <li>{item.strMeasure19} {item.strIngredient19}</li>}
                        {item.strIngredient20 === '' ? null : <li>{item.strMeasure20} {item.strIngredient20}</li>}
                        </ul>
                        <h2>Tutorial</h2>
                        <ReactPlayer url={item.strYoutube} />
                        <div className='mb-4'></div>
                      </div>
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
        </Col>
      </Row>
    </Container>
  )
};

export default MealsDetail;