import { CiTimer } from "react-icons/ci";
import { FaRocket, FaUserAlt } from "react-icons/fa";

const ourQualityData = [
    {
        id: 1,
        icon: () => <CiTimer className="text-orange-600 text-5xl" />, 
        title: "TURN AROUND TIME",
        detail: "With our extensive network of professional digitizers and vector artists, Optimus Arts can meet your demands in as little as 3 to 4 hours."
    },
    {
        id: 2,
        icon: () => <FaUserAlt className="text-orange-600 text-5xl" />,
        title: "WHY OPTIMUS ARTS",
        detail: "Optimus Arts, a global digitizing services leader, collaborates with a diverse range of businesses worldwide, powered by a modern infrastructure and skilled digitizers."
    },
    {
        id: 3,
        icon: () => <FaRocket className="text-orange-600 text-5xl" />,
        title: "OUR CORE COMPETENCY",
        detail: "Optimus Arts excels in customer satisfaction and rapid turnaround times, specializing in exceptional customer service and efficiency."
    },
];

export default ourQualityData;
