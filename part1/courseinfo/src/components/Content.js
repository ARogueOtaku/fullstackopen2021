import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => {
        return <Part key={index} {...part} />;
      })}
    </div>
  );
};

export default Content;
