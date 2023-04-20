type Props = {
  id: string;
};

const BlockLink: React.FC<Props> = ({ id }) => {
  return (
    <div id="{id}" className="grid-stack-item" gs-min-w="6">
      <div className="grid-stack-item-content">
        <div className="group flex h-full flex-col overflow-hidden rounded-xl  border border-purple-900 bg-neutral-900 shadow-xl">
          <div
            className="flex h-full flex-col rounded-t-xl p-4 text-left"
            style={{
              backgroundImage: `url("/img/8.jpg")`,
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="p-4">
            <span className="block text-xs font-semibold uppercase text-neutral-300">
              google.com
            </span>
            <p className=" text-neutral-100">Sample sdfsf title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLink;
