import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import Header from "../../components/common/Header/Header";

const {container, wrapper} = styles;
const MainLayout = () => {
  return (
    <Container className={container}>
        <Header/>
        <div className={wrapper}>
        </div>
    </Container>
  )
}
export default MainLayout;
