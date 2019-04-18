export const extractLaravelError = function (errorResponse) {
  return JSON.stringify(errorResponse.response.data.errors)
}

export const EVENT_HUB_NAME = 'flash-message'
