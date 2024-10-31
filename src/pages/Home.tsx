
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { headerNav } from "../data/header";

export default function Home(){
    return (
        <>
            <Header linkMenu={headerNav} userMail="admin"/>
            <div className="main-page">
                <div className="container">
                    <p>PageHome</p>
                </div>
            </div>
            <Footer copyright="Note Wise"/>
        </>
    )
}