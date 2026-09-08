export type Experiment = {
  index: string;
  title: string;
  mode: string;
  description: string;
};

export const experiments: Experiment[] = [
  {
    index: "L.01",
    title: "Elastic Type",
    mode: "Kinetic typography",
    description: "Letters stretch, settle and reorganize in response to a controlled rhythm.",
  },
  {
    index: "L.02",
    title: "Shape Field",
    mode: "Cursor / touch study",
    description: "A field of marks bends around a pointer or a finger without obscuring the controls.",
  },
  {
    index: "L.03",
    title: "Measured Scroll",
    mode: "Scroll study",
    description: "Type, rules and frames exchange visual weight as the reading position changes.",
  },
];
