export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  const task = true;  // Scoped only within the if block
	  const task2 = false; // Scoped only within the if block
	  return [task2, task];
  }
  return [task, task2]; // The outer task and task2 are returned
}

