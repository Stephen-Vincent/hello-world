function Hello({ name, message }) {
  return (
    <div>
      <h1>
        {message} {name}!
      </h1>
    </div>
  );
}

// Set a default values for props
Hello.defaultProps = {
  message: "Hi",
};

export default Hello;
