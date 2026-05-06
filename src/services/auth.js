const STORAGE_KEY = 'chambapp_session'

const DEMO_USERS = [
  {
    id: 1,
    name: 'Cliente Demo',
    email: 'usuario1@edu.com',
    password: 'pass11',
    role: 'cliente'
  },
  {
    id: 2,
    name: 'Trabajador Demo',
    email: 'usuario2@edu.com',
    password: 'pass22',
    role: 'trabajador'
  },
  {
    id: 3,
    name: 'Administrador Demo',
    email: 'usuario3@edu.com',
    password: 'pass33',
    role: 'admin'
  }
]

export function loginDemo({ email, password, remember }) {
  const cleanEmail = email.trim().toLowerCase()

  const matchedUser = DEMO_USERS.find(
    (user) => user.email.toLowerCase() === cleanEmail && user.password === password
  )

  if (!matchedUser) {
    return {
      ok: false,
      message: 'Correo o contraseña incorrectos.'
    }
  }

  const sessionUser = {
    id: matchedUser.id,
    name: matchedUser.name,
    email: matchedUser.email,
    role: matchedUser.role
  }

  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem(STORAGE_KEY)

  const storage = remember ? localStorage : sessionStorage
  storage.setItem(STORAGE_KEY, JSON.stringify(sessionUser))

  return {
    ok: true,
    user: sessionUser
  }
}

export function getCurrentUser() {
  const raw = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY)

  if (!raw) return null

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function isAuthenticated() {
  return !!getCurrentUser()
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem(STORAGE_KEY)
}

export function getDashboardPath(role) {
  if (role === 'cliente') return '/dashboard/cliente'
  if (role === 'trabajador') return '/dashboard/trabajador'
  if (role === 'admin') return '/dashboard/admin'
  return '/login'
}

export function getDemoUsers() {
  return DEMO_USERS.map(({ password, ...user }) => user)
}