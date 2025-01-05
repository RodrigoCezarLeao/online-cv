export const HeaderContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
  padding: "2em",
};

export const ProfilePictureContainerStyle: React.CSSProperties = {
  width: "100px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "5px solid white",
};

export const ProfilePictureStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover", // problema com typescript
  transform: "scale(1.3) translateY(10px)",
};

export const HeaderTitleStyle: React.CSSProperties = {
  color: "white",
  textShadow: "0px 0px 2px black",
  // WebkitTextStroke: "0.5px white"
};
