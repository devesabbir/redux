
export const idGenarator = function(arry) {
  let id = ''
  if( arry.length > 0) {
     id = arry[arry.length - 1].id + 1
  }
  else {
     id = 1
  }
  return id
}

