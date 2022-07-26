import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="absolute top-5 my-4">
            <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 p-3 text-emerald-600">
                    <FontAwesomeIcon size="md" icon={["far", "user"]} />
                </div>

                <div className="ml-3 mr-auto font-bold">Stefan</div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 p-3 text-purple-600">
                    <FontAwesomeIcon size="md" icon={["fas", "moon"]} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
