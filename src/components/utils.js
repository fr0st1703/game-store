export const basketTotal = items => items.reduce((acc, game) => acc += game.price, 0);