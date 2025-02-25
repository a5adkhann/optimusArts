import { FaTshirt } from "react-icons/fa";
import { FaHatCowboy } from "react-icons/fa";
import { GiSewingMachine, GiSleevelessJacket, GiTowel } from "react-icons/gi";
import { TbVectorBezier } from "react-icons/tb";

const coreServicesData = [
    {
        id: 1,
        icon: () => <FaTshirt />, 
        title: "LOGO DIGITIZING",
        detail: "A company’s logo is one of the most important aspects of marketing collateral which helps people “put a name with a face”. In order for your logo to have the best quality possible."
    },
    {
        id: 2,
        icon: () => <FaHatCowboy />,
        title: "CAP DIGITIZING",
        detail: "There are two types of caps commonly known as structured caps and unstructured caps. Whenever you see a design or pattern on cap that means it is a digitized pattern."
    },
    {
        id: 3,
        icon: () => <GiSleevelessJacket />,
        title: "JACKET BACK DIGITIZINGG",
        detail: "Optimus Arts is a pioneer in offering custom digitizing services, especially for Jacket Backs. For custom embroidery digitizing, we convert picture or images in to stitches that you send us."
    },
    {
        id: 4,
        icon: () => <GiTowel />,
        title: "TOWEL DIGITIZING",
        detail: "Personalize your towel and let your product build your brand with Towel Digitizing! Towel Digitizing is a popular embroidery art in stitching creative designs and puffs on towels for all age groups."
    },
    {
        id: 5,
        icon: () => <GiSewingMachine />,
        title: "OTHER DIGITIZING SERVICES",
        detail: "Other kinds of digitizing services provided by us like sleeves digitizing, jacket back digitizing, towel digitizing and many more. Our Digitizing Experts professionally do this complete process by hand."
    },
    {
        id: 6,
        icon: () => <TbVectorBezier />,
        title: "RASTER TO VECTOR",
        detail: "Vector Art is created using Vector illustration software programs. These programs use points,lines and shapes to create art that is clean and camera ready."
    },
];

export default coreServicesData;
