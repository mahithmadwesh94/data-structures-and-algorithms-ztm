// when a string is entered, hash is created. For the same string same hash is created. It is idempotent.

// addition of key => O(1)
// Hash collisions => same keys gets hashed into same space => linked list would be created O(n)

// with object you can set key as string only
// with new Map() you can set anything as key and maintans insertion order