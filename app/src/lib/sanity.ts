import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.SANITY_API_VERSION || '2024-03-21'

// Development client with write access
const devClient = createClient({
  projectId,
  dataset,
  useCdn: false, // We want fresh data in development
  apiVersion,
  token: process.env.SANITY_API_TOKEN
})

// Production client with CDN and read-only access
const prodClient = createClient({
  projectId,
  dataset,
  useCdn: true, // Enable CDN caching in production
  apiVersion,
})

// Export the appropriate client based on environment
export const client = process.env.NODE_ENV === 'development' ? devClient : prodClient 