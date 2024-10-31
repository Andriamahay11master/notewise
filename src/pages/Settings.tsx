import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { breadcrumbSettings } from "../data/breadcrumb";
import { headerNav } from "../data/header";

export default function Settings() {
  return (
    <>
      <Header linkMenu={headerNav} userMail="admin" />
      <div className="main-page">
        <div className="container">
          <div className="main-page-top">
            <Breadcrumb items={breadcrumbSettings} />
          </div>
          <p>Page Settings</p>
        </div>
      </div>
      <Footer copyright="Note Wise" />
    </>
  );
}
