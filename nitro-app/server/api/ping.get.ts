export default defineEventHandler(async (event) => {
    assertMethod(event, 'GET')

    const header = getHeaders(event)

    return header
})
  