export type ExpenseCategory =
  | 'food' | 'transport' | 'housing' | 'health' | 'entertainment'
  | 'shopping' | 'utilities' | 'travel' | 'education' | 'subscriptions'
  | 'fitness' | 'personal_care' | 'dining' | 'other'

export interface Expense {
  id: string; user_id: string; amount: number; category: ExpenseCategory
  merchant: string; description?: string; expense_date: string
  receipt_url?: string; carbon_kg?: number; is_anomaly: boolean
  source: 'manual' | 'ocr' | 'import'; created_at: string
}

export interface Budget {
  id: string; user_id: string; category: ExpenseCategory
  limit_amount: number; period: 'monthly' | 'weekly'
  alert_threshold: number; spent_amount?: number
  percentage_used?: number; created_at: string
}

export interface Profile {
  id: string; email: string; full_name?: string
  avatar_url?: string; currency: string
  eco_points: number; monthly_budget?: number; created_at: string
}

export interface SpendingSummary {
  total: number; count: number
  by_category: { category: string; total: number }[]
  daily: { date: string; total: number }[]
  carbon_total: number; avg_per_day: number
}

export const CATEGORY_META: Record<string, { label: string; icon: string; color: string }> = {
  food:          { label: 'Groceries',     icon: '🛒', color: '#4CAF50' },
  dining:        { label: 'Dining',        icon: '🍜', color: '#FF9800' },
  transport:     { label: 'Transport',     icon: '🚇', color: '#2196F3' },
  housing:       { label: 'Housing',       icon: '🏠', color: '#9C27B0' },
  health:        { label: 'Health',        icon: '💊', color: '#F44336' },
  entertainment: { label: 'Entertainment', icon: '🎮', color: '#E91E63' },
  shopping:      { label: 'Shopping',      icon: '🛍️', color: '#FF5722' },
  utilities:     { label: 'Utilities',     icon: '⚡', color: '#607D8B' },
  travel:        { label: 'Travel',        icon: '✈️', color: '#00BCD4' },
  education:     { label: 'Education',     icon: '📚', color: '#3F51B5' },
  subscriptions: { label: 'Subscriptions', icon: '📱', color: '#673AB7' },
  fitness:       { label: 'Fitness',       icon: '💪', color: '#8BC34A' },
  personal_care: { label: 'Self-Care',     icon: '✨', color: '#FFC107' },
  other:         { label: 'Other',         icon: '📦', color: '#9E9E9E' },
}
