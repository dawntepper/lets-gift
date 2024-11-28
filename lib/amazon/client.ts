import { DefaultApi, GetItemsRequest, SearchItemsRequest } from 'paapi5-nodejs-sdk'
import { createHmac } from 'crypto'

const MARKETPLACE = process.env.AMAZON_MARKETPLACE || 'www.amazon.com'
const PARTNER_TAG = process.env.AMAZON_PARTNER_TAG!
const ACCESS_KEY = process.env.AMAZON_ACCESS_KEY!
const SECRET_KEY = process.env.AMAZON_SECRET_KEY!

const defaultApi = new DefaultApi({
  accessKey: ACCESS_KEY,
  secretKey: SECRET_KEY,
  host: MARKETPLACE,
  region: 'us-east-1'
})

export async function searchAmazonProducts(query: string, category?: string) {
  try {
    const searchRequest = new SearchItemsRequest({
      PartnerTag: PARTNER_TAG,
      PartnerType: 'Associates',
      Keywords: query,
      SearchIndex: category || 'All',
      Resources: [
        'Images.Primary.Large',
        'ItemInfo.Title',
        'Offers.Listings.Price',
        'ItemInfo.Features',
        'ItemInfo.ProductInfo'
      ]
    })

    const response = await defaultApi.searchItems(searchRequest)
    
    if (response.SearchResult?.Items) {
      return response.SearchResult.Items.map(item => ({
        id: item.ASIN!,
        name: item.ItemInfo?.Title?.DisplayValue || '',
        price: parseFloat(item.Offers?.Listings?.[0]?.Price?.Amount?.toString() || '0'),
        description: item.ItemInfo?.Features?.DisplayValues?.join(' ') || '',
        imageUrl: item.Images?.Primary?.Large?.URL || '',
        url: item.DetailPageURL || '',
        reason: '' // This will be filled by the AI
      }))
    }

    return []
  } catch (error) {
    console.error('Error searching Amazon products:', error)
    return []
  }
}