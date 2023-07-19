function generatePrompt(object) {
    const capitalizeobject = object[0].toUpperCase() + object.slice(1).toLowerCase()
    return "Suggest three names of object for an object."

}

const completion = await openai.createCompleteion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.object),
    temperature: 0.6,
})
