export default function assignColor(strength, order, type) {
  const colorObject = {
    "too weak": "#F64A4A",
    weak: "#FB7C58",
    medium: "#F8CD65",
    strong: "#A4FFAF",
  };

  switch (strength) {
    case "too weak":
      return order === 1 && colorObject["too weak"];
    case "weak":
      return (order === 1 || order === 2) && colorObject["weak"];
    case "medium":
      return order >= 1 && order <= 3 && colorObject["medium"];
    case "strong":
      return order >= 1 && order <= 4 && colorObject["strong"];
    default:
      return type === "background" ? "inherit" : "#E6E5EA";
  }
}
