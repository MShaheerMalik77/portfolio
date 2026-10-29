

const CATEGORY_RULES = [
  { category: 'Call', keywords: ['call', 'ring', 'phone', 'dial'] },
  { category: 'Message', keywords: ['message', 'text', 'whatsapp', 'email', 'reply'] },
  { category: 'Meeting', keywords: ['meeting', 'meet', 'standup', 'sync', 'call with'] },
  { category: 'Shopping', keywords: ['buy', 'order', 'purchase', 'pick up', 'grocery', 'groceries'] },
  { category: 'Reminder', keywords: ['remind', 'reminder', "don't forget", 'remember'] },
  { category: 'Study', keywords: ['study', 'revise', 'read', 'assignment', 'homework', 'submit'] },
]

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

function detectCategory(lower) {
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((k) => lower.includes(k))) return rule.category
  }
  return 'General Task'
}

function detectRecurrence(lower) {
  if (/\bevery day\b|\bdaily\b/.test(lower)) return 'Daily'
  if (/\bevery week\b|\bweekly\b/.test(lower)) return 'Weekly'
  if (/\bevery month\b|\bmonthly\b/.test(lower)) return 'Monthly'
  const weekday = WEEKDAYS.find((d) => lower.includes(`every ${d}`))
  if (weekday) return `Weekly (${weekday[0].toUpperCase()}${weekday.slice(1)})`
  return 'One-time'
}

function detectTime(lower) {
  const clockMatch = lower.match(/\b(\d{1,2})(:\d{2})?\s?(am|pm)\b/)
  if (clockMatch) return clockMatch[0].toUpperCase().replace(/\s+/g, ' ')
  if (/\btonight\b/.test(lower)) return 'Tonight'
  if (/\btomorrow\b/.test(lower)) return 'Tomorrow'
  if (/\bnoon\b/.test(lower)) return 'Noon'
  return null
}

function cleanTitle(original, lower) {
  let t = original.trim()
  t = t.replace(/^(remind me to|don't forget to|remember to)\s*/i, '')
  t = t.replace(/\bevery (day|week|month|sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/gi, '')
  t = t.replace(/\b(\d{1,2})(:\d{2})?\s?(am|pm)\b/gi, '')
  t = t.replace(/\b(tonight|tomorrow|noon|daily|weekly|monthly)\b/gi, '')
  t = t.replace(/\s{2,}/g, ' ').trim()
  t = t.replace(/[\s,]+$/, '')
  return t.length > 0 ? t[0].toUpperCase() + t.slice(1) : original
}

export function parseTask(input) {
  const text = input.trim()
  if (!text) return null

  const lower = text.toLowerCase()
  const category = detectCategory(lower)
  const recurrence = detectRecurrence(lower)
  const time = detectTime(lower)
  const title = cleanTitle(text, lower)

  // A rough stand-in "confidence" so the output shape resembles a real
  // classifier — scores higher when more signals were actually found.
  const signals = [category !== 'General Task', recurrence !== 'One-time', !!time].filter(Boolean).length
  const confidence = [0.62, 0.78, 0.9, 0.97][signals]

  return { title, category, recurrence, time, confidence }
}
