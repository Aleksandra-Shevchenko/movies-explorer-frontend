import './PageNotFound.css';
import { Link, useHistory } from "react-router-dom";


function PageNotFound() {

  const history = useHistory();

  //---РАЗМЕТКА JSX---
  return (
    <section className='notfound'>
      <div className='notfound__desc'>
        <h2 className='notfound__title'>404</h2>
        <p className='notfound__subtitle'>Страница не найдена</p>
      </div>
      <Link  onClick={()=>history.goBack()} className='notfound__link app__link'>Назад</Link>
    </section>
  );
}
  
export default PageNotFound;