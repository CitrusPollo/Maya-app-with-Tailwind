import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
    return (
        // Card
        <div className="my-3 rounded-3xl border p-5">
            {/* Card title */}
            <h1 className="flex items-baseline gap-2 text-3xl font-black">
                <FontAwesomeIcon size="xs" icon={["far", "chess-king"]} />
                69,420
            </h1>
            {/* Card subtitle */}
            <h2 className="font-bold text-gray-400">Wallet balance</h2>
            {/* Grid */}
            <div className="flex justify-center space-x-6 py-5">
                {/* Grid item 1 */}
                <div className="w-16 space-y-2 text-center [&>div]:hover:bg-gray-100 [&>h3]:hover:text-gray-500">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                        <FontAwesomeIcon
                            size="xl"
                            icon={["far", "address-book"]}
                        />
                    </div>
                    <h3 className="text-sm font-bold text-gray-400">Load</h3>
                </div>
                {/* Grid item 2 */}
                <div className="w-16 space-y-2 text-center [&>div]:hover:bg-gray-100  [&>h3]:hover:text-gray-500 ">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 ">
                        <FontAwesomeIcon
                            size="xl"
                            icon={["far", "credit-card"]}
                        />
                    </div>
                    <h3 className="text-sm font-bold text-gray-400">
                        Credit card
                    </h3>
                </div>

                {/* Grid item 3 */}
                <div className="w-16 space-y-2 text-center [&>div]:hover:bg-gray-100  [&>h3]:hover:text-gray-500 ">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 ">
                        <FontAwesomeIcon
                            size="xl"
                            icon={["far", "gem"]}
                        />
                    </div>
                    <h3 className="text-sm font-bold text-gray-400">
                        Rewards
                    </h3>
                </div>
                {/* Grid item 4 */}
                <div className="w-16 space-y-2 text-center [&>div]:hover:bg-gray-100  [&>h3]:hover:text-gray-500 ">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 ">
                        <FontAwesomeIcon size="xl" icon={["far", "money-bill-1"]} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-400">Send money</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;
