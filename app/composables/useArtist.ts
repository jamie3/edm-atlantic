export const useArtist = () => {
  const getArtist = async (slug: string) => {
    console.log(`getArtist: ${slug}`);
    const { data: artist } = await useAsyncData(`artist-${slug}`, () =>
      queryCollection('artists').where('slug', '=', slug).first()
    );

    console.log('getArtist', artist.value);

    return artist;
  };

  return {
    getArtist,
  };
};
