const API_BASE_URL = 'https://dummyjson.com'

const STORAGE_KEYS = {
  accessToken: 'chambapp_access_token',
  refreshToken: 'chambapp_refresh_token',
  user: 'chambapp_user'
}

function getStorage(remember = false) {
  return remember ? window.localStorage : window.sessionStorage
}

function readValue(key) {
  return window.localStorage.getItem(key) || window.sessionStorage.getItem(key)
}

function writeSession({ accessToken, refreshToken, user }, remember = false) {
  clearSession()

  const storage = getStorage(remember)

  storage.setItem(STORAGE_KEYS.accessToken, accessToken)

  if (refreshToken) {
    storage.setItem(STORAGE_KEYS.refreshToken, refreshToken)
  }

  if (user) {
    storage.setItem(STORAGE_KEYS.user, JSON.stringify(user))
  }
}

export function clearSession() {
  Object.values(STORAGE_KEYS).forEach((key) => {
    window.localStorage.removeItem(key)
    window.sessionStorage.removeItem(key)
  })
}

export function getAccessToken() {
  return readValue(STORAGE_KEYS.accessToken)
}

export function getRefreshToken() {
  return readValue(STORAGE_KEYS.refreshToken)
}

export function getStoredUser() {
  const rawUser = readValue(STORAGE_KEYS.user)

  if (!rawUser) {
    return null
  }

  try {
    return JSON.parse(rawUser)
  } catch {
    return null
  }
}

export function isAuthenticated() {
  return Boolean(getAccessToken())
}

async function getUserByEmail(email) {
  const response = await fetch(`${API_BASE_URL}/users/filter?key=email&value=${encodeURIComponent(email)}`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'No fue posible consultar la API de usuarios.')
  }

  if (!data?.users?.length) {
    throw new Error('No existe un usuario registrado con ese correo en la API.')
  }

  return data.users[0]
}

export async function loginWithEmail(email, password, remember = false) {
  const normalizedEmail = email.trim().toLowerCase()
  const userFound = await getUserByEmail(normalizedEmail)

  const loginResponse = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: userFound.username,
      password,
      expiresInMins: 60
    })
  })

  const loginData = await loginResponse.json()

  if (!loginResponse.ok) {
    throw new Error(loginData?.message || 'Las credenciales ingresadas no son válidas.')
  }

  const userSession = {
    id: loginData.id,
    username: loginData.username,
    email: loginData.email,
    firstName: loginData.firstName,
    lastName: loginData.lastName,
    gender: loginData.gender,
    image: loginData.image
  }

  writeSession(
    {
      accessToken: loginData.accessToken,
      refreshToken: loginData.refreshToken,
      user: userSession
    },
    remember
  )

  return userSession
}

export async function getCurrentAuthUser() {
  const token = getAccessToken()

  if (!token) {
    throw new Error('No existe una sesión activa.')
  }

  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()

  if (!response.ok) {
    clearSession()
    throw new Error(data?.message || 'La sesión ya no es válida. Vuelve a iniciar sesión.')
  }

  const normalizedUser = {
    id: data.id,
    username: data.username,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    image: data.image
  }

  const usingLocal = Boolean(window.localStorage.getItem(STORAGE_KEYS.accessToken))

  writeSession(
    {
      accessToken: token,
      refreshToken: getRefreshToken(),
      user: normalizedUser
    },
    usingLocal
  )

  return normalizedUser
}

export function logout() {
  clearSession()
}
