export const PhotoTypeUpload = (type: string): boolean => {
  return type.includes('jpeg') || type.includes('png') || type.includes('webp');
};
