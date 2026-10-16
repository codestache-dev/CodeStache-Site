export interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export interface NavLink {
  label: string
  href: string
}

export interface ValuePillar {
  id: string
  title: string
  description: string
  iconName: 'Zap' | 'Brain' | 'Target'
}

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  iconName: 'Monitor' | 'Bot' | 'Cloud' | 'Network'
  tags: string[]
  highlights: string[]
}

export interface ProductItem {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  status: string
  statusType: 'production' | 'mvp' | 'research'
  badgeText: string
  demoUrl?: string
  isPrimary?: boolean
}

export interface FounderInfo {
  name: string
  role: string
  bio: string
  quote: string
  avatarUrl: string
  skills: string[]
  socials: {
    github: string
    linkedin: string
    whatsapp: string
  }
}

export interface ProjectTypeOption {
  id: string
  title: string
  duration: string
  description: string
  badge: string
}

export interface ProjectFeatureOption {
  id: string
  label: string
  category: string
}

export type UrgencyLevel = 'low' | 'medium' | 'high'

export interface UrgencyOption {
  id: UrgencyLevel
  label: string
  description: string
  multiplierText: string
}

export interface ContactFormData {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  description: string
}
