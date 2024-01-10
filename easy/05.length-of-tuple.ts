type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "DRAGON",
  "STARSHIP",
  "FALCON HEAVY",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

// --------------Solution--------------
type Length<List extends string[]> = List extends { length: infer N }
  ? N
  : never;

export {};
