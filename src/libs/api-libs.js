// file khusus api external
export async function getAnimeResponse(resource, query) {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
   const anime = await response.json();
   return anime
}

export async function getNestedAnimeResponse(resource, objectProperty) {
   const response = await getAnimeResponse(resource)
   const recommendedAnime = await response.data.flatMap((item) => item.entry)
   return recommendedAnime;
}
