export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterable into an array and join each employee name with ' | '
  return [...reportWithIterator].join(' | ');
}
