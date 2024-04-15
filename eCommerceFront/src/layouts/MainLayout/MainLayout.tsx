import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import {Header, Footer} from '../../components/common';

const {container, wrapper} = styles;
const MainLayout = () => {
  return (
    <Container className={container}>
        <Header/>
        <div className={wrapper}>
          <Outlet/>
        </div>
    <Footer></Footer>
    </Container>
  )
}
export default MainLayout;
