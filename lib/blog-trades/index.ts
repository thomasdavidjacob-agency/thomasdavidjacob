import type { BlogPost } from '../blog'
import { tradesPart1 } from './part1'
import { tradesPart2 } from './part2'
import { tradesPart3 } from './part3'

// "AI for the Trades" drip: 30 posts, one per day from 2026-10-14, in day order.
export const tradesPosts: BlogPost[] = [...tradesPart1, ...tradesPart2, ...tradesPart3]
