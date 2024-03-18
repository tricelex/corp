import Hero from "@/components/Hero";
import scaleImage from "../../../public/scale.jpg"
// import scaleImage from "public/scale.jpg"

export default function ScalePage() {
    return <Hero imgData={scaleImage} imgAlt="Steeel factory" title="Scale your app to infinity."/>;
}