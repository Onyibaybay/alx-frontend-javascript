export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task = true;  // Scoped only within the if block
    const task2 = false; // Scoped only within the if block
  }

  return [task, task2]; // The outer task and task2 are returned
}
