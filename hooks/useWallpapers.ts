export interface Wallpaper {
  url: string;
  name: string;
}
export interface FullWallpaper extends Wallpaper{
  liked: boolean;
  suggested: boolean;
  library: boolean;
}
export function useSuggestedWallpapers():FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.suggested)
}

export function useLikedWallpapers():FullWallpaper[]{
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.liked);
}
export function useLibraryWallpapers():FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.library);
}
export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://images.pexels.com/photos/29143335/pexels-photo-29143335/free-photo-of-cozy-cat-sleeping-on-classic-vintage-chair.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Vinatge Chair",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://images.pexels.com/photos/14030278/pexels-photo-14030278.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Building",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://images.pexels.com/photos/13214249/pexels-photo-13214249.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Apple Ipad",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://images.pexels.com/photos/8927039/pexels-photo-8927039.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ipad On Desk",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://images.pexels.com/photos/18475707/pexels-photo-18475707/free-photo-of-a-typewriter-with-a-paper-that-says-cryptonomics.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Cryptoeconomics",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/ChepdtITQYibCtFCeFV7iA",
      name: "Women-Artwork",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/KyuEzTODTCq6e4JmfvvBfA",
      name: "Wings",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/3igpGY9bQGu1SGhNCURkMw",
      name: "Shiva",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/TdoYvLFUTVmOnHVgMVI4Ng",
      name: "Ski Fit",
      liked: true,
      suggested: true,
      library: true,
    },
  ];
}
