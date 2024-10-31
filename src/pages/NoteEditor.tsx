import Header from "../components/header/Header"
import { headerNav } from "../data/header"

export default function NoteEditor(){
    return (
        <>
            <Header linkMenu={headerNav} userMail="admin"/>
            <div className="main-page">
                <div className="container">
                    <p>Page NoteEditor</p>
                </div>
            </div>
        </>
    )
}