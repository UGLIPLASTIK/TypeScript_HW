export default interface Buyable {
  id?: number,
  name?: string,
  // getInfo?(): void,
  readonly price?: number,
  // discount?: number,
  year?: number,
  country?: string,
  tagline?: string,
  genre?: string,
  duration?: string,
};