export const profileValid = async (password, currentPassword, handleOnSubmit) => {
  if (password !== '' && currentPassword !== '') {
    await handleOnSubmit({ passwod: password, currentPassword: currentPassword })
  }
}