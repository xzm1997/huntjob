async function fn(){
  try let a = await Promise.reject('error')
  catch(error) console.log(error)
}