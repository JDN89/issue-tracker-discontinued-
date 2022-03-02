
export interface LoginUserInterface {
  email: string
  password: string
}

export interface RegisterUserInterface {
  userName: string
  email: string
  password: string
}

export interface NewMessageInterface {
  Title: string
  Body: string
}

export interface Issue {
  id: number
  title: string
  date: string
  type: string
  urgency: string

}
