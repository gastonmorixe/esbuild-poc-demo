export const Badge: React.FC<React.PropsWithChildren> = (props) => (
  <div
    style={{
      display: "inline-flex",
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: "0.75ch",
      fontSize: "0.75em",
      background: "red",
      color: "white",
      fontWeight: "bold",
      borderRadius: "50%",
      overflow: "hidden",
    }}
  >
    {props.children}
  </div>
)
