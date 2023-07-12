import "./Card.css";
const Card = (props) => {
  // sets the properties for all the classes
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
