export async function userLogin(data) {

  try {
    const response = await fetch('http://localhost:3000/auth/login',{
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = response.json()
    console.log(res)
    return res
  } catch(e) {
    console.log(e)
    return e
  }

}
