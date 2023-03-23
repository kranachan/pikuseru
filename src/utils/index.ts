export const isMac = /Mac/.test(navigator.platform)

export const openLinkInNewTab = (url: string) => {
  window.open(url, '_blank')
}
