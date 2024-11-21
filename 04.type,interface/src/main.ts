// interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = {
  name: "honey bear",
  honey: true,
};

// type
type Animal1 = {
  name: string;
};

type Bear1 = Animal1 & {
  honey: boolean;
};

const bear1: Bear1 = {
  name: "honey bear",
  honey: false,
};

// interface 선언 병합
interface Animal2 {
  name: string;
}

interface Animal2 {
  honey: boolean;
}

const bear2: Animal2 = {
  name: "honey",
  honey: false,
};
