import Header from "../components/header/Header";
import { headerNav } from "../data/header";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { breadcrumbCapture } from "../data/breadcrumb";
import CaptureForm from "../components/capture/CaptureForm";

export default function Capture() {
  return (
    <>
      <Header linkMenu={headerNav} userMail="admin" />
      <div className="main-page">
        <div className="container">
          <div className="main-page-top">
            <Breadcrumb items={breadcrumbCapture} />
          </div>
          <div className="main-section">
            <CaptureForm />
          </div>
        </div>
      </div>
      <Footer copyright="Note Wise" />
    </>
  );
}
