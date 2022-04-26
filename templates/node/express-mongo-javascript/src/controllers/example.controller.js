
/**
 * Screams a message when the parameter is an alphabet-only value
 * @param {import('express').Request} req The request object from Express
 * @param {import('express').Response} res The response object from Express
 */
export default (req, res) => {
  // Check whether the value passed as `req.params['0']` contains only alphabets 
  if(/^[a-z]+$/i.test(req.params['0'])) {
    const messageToScream = req.params['0']
    let screamedMessage = ''

    // Create a message of the original text converted to uppercase with each letter repeated 3 times
    for(let i = 0; i < messageToScream.length; i+= 1) {
      for(let j = 0; j < 3; j += 1) {
        screamedMessage += messageToScream[i].toUpperCase()
      }
    }

    // Send the screamed message as a response
    return res.send(`${screamedMessage}!!!`)
  }

  // Send a sad message when the supplied value contains foreign characters like numbers
  return res.send('I thought you\'d send me some words or names to scream. *sob :(')
}