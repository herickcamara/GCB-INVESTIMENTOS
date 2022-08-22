export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  bmi: number[];
  youBmi?: number;
};
export const levels: Level[] = [
  { title: "thinness", color: "#96a3ab", icon: "down", bmi: [0, 18.5] },
  { title: "Normal", color: "#0ead69", icon: "up", bmi: [18.6, 24.9] },
  { title: "overweight", color: "#e2b039", icon: "down", bmi: [25, 30] },
  { title: "obesity", color: "#c3423f", icon: "down", bmi: [30, 1, 90] },
];

export const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / (height * height);

  for (let i in levels) {
    if (bmi >= levels[i].bmi[0] && bmi <= levels[i].bmi[1]) {
      let newLevel = { ...levels[i] };
      newLevel.youBmi = Math.ceil(bmi);
      return newLevel;
    }
  }
  return null;
};
