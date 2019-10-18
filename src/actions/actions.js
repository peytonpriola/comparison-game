export const player1NameAction = (name) => {
  return ({
    type: "ONE_NAME",
    payload: name
  })
}

export const player1WeaponAction = (weapon) => {
  return ({
    type: "ONE_WEAPON",
    payload: weapon
  })
}
