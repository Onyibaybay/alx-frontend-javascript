mport ClassRoom from './0-classroom';

export function initializeRooms() {
  // Create an array of ClassRoom objects with the sizes 19, 20, and 34
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
