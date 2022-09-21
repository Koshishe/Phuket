export async function fetchAPI(query: string) {
  try {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
    if (!STRAPI_URL) {
      throw new Error('NEXT_PUBLIC_STRAPI_API_URL is empty')
    }
    const res = await fetch(`${STRAPI_URL}/api/${query}`)

    const json = await res.json()
    if (json.errors) {
      // eslint-disable-next-line no-console
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }

    return json.data
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

export async function getRestaurantes() {
  return fetchAPI('restaurantes')
}
