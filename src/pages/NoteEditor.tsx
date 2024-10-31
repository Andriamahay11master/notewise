import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { breadcrumbEdit } from "../data/breadcrumb";
import { headerNav } from "../data/header";

export default function NoteEditor() {
  return (
    <>
      <Header linkMenu={headerNav} userMail="admin" />
      <div className="main-page">
        <div className="container">
          <div className="main-page-top">
            <Breadcrumb items={breadcrumbEdit} />
          </div>
          <p>Page NoteEditor</p>
        </div>
      </div>
      <Footer copyright="Note Wise" />
    </>
  );
}
