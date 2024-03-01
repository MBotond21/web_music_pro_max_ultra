import { Container } from "react-bootstrap";
import FooterForm from "../form";
import "./index.css"

interface Props {

}

export function MainFooter(props: Props){
    return <footer className="mainfooter">
        <Container>
            <FooterForm></FooterForm>
        </Container>
    </footer>
}