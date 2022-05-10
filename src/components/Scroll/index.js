function Scroll({ children }) {
  return (
    <div
      style={{
        maxHeight: "70vh",
        overflowY: "scroll",
        padding: "50px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
