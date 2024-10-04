function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Block-scoped, so no overwriting occurs
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
