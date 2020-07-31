export const validateImage = (image) => {
  const validType = ['image/jpg', 'image/png', 'image/jpeg'];
  if (validType.includes(image.type)) {
    return true;
  }
  return false;
}