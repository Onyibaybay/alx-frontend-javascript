// Modify taskFirst to use const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// No changes needed for getLast
export function getLast() {
  return ' is okay';
}

// Modify taskNext to use let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
