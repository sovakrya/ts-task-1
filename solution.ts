enum ACTION {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

type Person = {
  id: number,
  name: string,
  items: Person[] |  null
}


// TODO Enum
const actionMap: ACTION[] = [ACTION.ADD, ACTION.DELETE, ACTION.UPDATE];

// TODO Interface
function func(id: number, isActive: boolean, callback: Function): (string | number)[][] {
  return [["name", 123]];
}
func(1, true, () => {});

// TODO Interface
const a: Person = {
  id: 123,
  name: "Eric",
  items: [
    {
      id: 55,
      name: "Masha",
      items: [],
    },
    {
      id: 34,
      name: "Max",
      items: null,
    },
  ],
};
