type Props = {
  name: string;
};

const BlockLink: React.FC<Props> = ({ name }) => {
  console.log('Rendering HomePage component');
  return <div>Hello there, {name}!</div>;
};

export default BlockLink;