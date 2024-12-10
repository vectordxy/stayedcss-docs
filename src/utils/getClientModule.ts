export const setModeServer = (mode: string) => {
  // return saveScreenMode(mode);
};

export const changeMode = (mode: "light" | "dark") => {
  // return changeScreenMode(mode);
};

export const applyClientStyle = (input: any) => {
  postdata(input);
  return transformStyles(input);
};

const postdata = async (input: any) => {
  try {
    await fetch("/api/client-style", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
  } catch (error) {
    // console.error("Error applying style:", error);
  }
};

function transformStyles(input: any): Record<string, string> {
  const { componentId, ...styles } = input;

  if (!componentId) {
    throw new Error("componentId is required in the input object.");
  }

  const transformedStyles: Record<string, string> = {};

  Object.keys(styles).forEach((key) => {
    transformedStyles[key] = `${key}-${componentId.replaceAll("/", "-")}`;
  });

  return transformedStyles;
}
