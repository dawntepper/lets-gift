import { NextResponse } from 'next/server'
import { ProductSearchService } from '@/lib/product-search'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      )
    }

    // Initialize product search service
    const productService = new ProductSearchService()
    const products = await productService.searchProducts(query)

    return NextResponse.json({ products })
  } catch (error) {
    console.error('Error searching products:', error)
    return NextResponse.json(
      { error: 'Failed to search products' },
      { status: 500 }
    )
  }
}