import { MdDesignServices } from "react-icons/md";
import { BiLogoSlack } from "react-icons/bi";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { LuFileVideo } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";

const servicesData = [
    {
        id: 1,
        serviceIcon: () => <MdDesignServices />,
        serviceTitle: "Graphic Design",
        serviceText: "lorem ipsum"
    },
    {
        id: 2,
        serviceIcon: () => <BiLogoSlack />,
        serviceTitle: "Logo",
        serviceText: "lorem ipsum"
    },
    {
        id: 3,
        serviceIcon: () => <MdOutlineBrandingWatermark />,
        serviceTitle: "Branding",
        serviceText: "lorem ipsum"
    },
    {
        id: 4,
        serviceIcon: () => <MdAnimation />,
        serviceTitle: "2D and 3D Animation",
        serviceText: "lorem ipsum"
    },
    {
        id: 5,
        serviceIcon: () => <LuFileVideo />,
        serviceTitle: "Video Editing",
        serviceText: "lorem ipsum"
    },
    {
        id: 6,
        serviceIcon: () => <CgWebsite />,
        serviceTitle: "Website Development",
        serviceText: "lorem ipsum"
    }
]

export default servicesData;