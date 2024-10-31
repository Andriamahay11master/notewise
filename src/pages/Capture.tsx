import { useState } from "react";
import CaptureButton from "../components/capture/CaptureButton";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import { headerNav } from "../data/header";
import Footer from "../components/footer/Footer";

export default function Capture(){
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

     // Fonction pour gérer l'image capturée
    const handleImageCapture = (imageData: string) => {
        setCapturedImage(imageData); // Stocke l'image pour affichage
    };

    return (
        <>
            <Header linkMenu={headerNav} userMail="admin"/>
            <div className="main-page">
                <div className="container">
                    <CaptureButton onCapture={handleImageCapture}/>
                    {capturedImage && (
                        <div style={{ marginTop: '20px' }}>
                        <h2>Preview</h2>
                        <img 
                            src={capturedImage} 
                            alt="Captured preview" 
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #ddd' }} 
                        />
                        </div>
                    )}
                    
                    <Link to={'/'}>Retour à l'accueil</Link>
                </div>
            </div>
            <Footer copyright="Note Wise"/>
        </>
    )
}