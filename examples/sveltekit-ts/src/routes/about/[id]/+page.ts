import type { Load } from '@sveltejs/kit'

export const ssr = false
export const prerender = false

export const load: Load = async ({ params }) => {
  return {
    id: Math.ceil(Math.random() * 1000),
  }
}
