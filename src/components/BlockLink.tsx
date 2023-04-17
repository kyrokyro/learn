export default function BlockLink() {
    return (
        <div key="d" className="group flex flex-col h-full bg-neutral-200 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 2, w: 2, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
            <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/2.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            </div>
            <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-500">
                    BlockLink.com
                </span>
                <p className=" text-neutral-900">
                    COMPONENT
                </p>
            </div>
        </div>
    );
}