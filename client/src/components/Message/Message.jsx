const Message = ({ title, ...props }) => {
  return (
    <div {...props}>
      <h5 className="text-center">{title}</h5>
      {props.children}
    </div>
  );
};

export default Message;
