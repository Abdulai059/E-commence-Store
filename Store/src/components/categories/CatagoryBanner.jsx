import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function CatagoryBanner() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 md:p-10 bg-gray-100 rounded-2xl">

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 text-red-600 leading-tight">
                    Big Sale on Electronics
                </h1>

                <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md px-4 md:px-0 mx-auto md:mx-0">
                    Get the best deals on TVs, Phones & Accessories
                </p>

                <div className="flex justify-center md:justify-start">
                    <Button>
                        <Link to="/shop">Shop Now</Link>
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-1 gap-4 px-4 w-full">
                <div className="flex-1 h-40 md:h-40 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
                <img src="/categoryimg/admin.jpg" alt="sale" />
                </div>
                <div className="flex-1 h-40 md:h-40 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
                <img src="/categoryimg/online.jpg" alt="sale" />
                </div>
            </div>

        </div>
    );
}



export default CatagoryBanner