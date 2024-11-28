# Gift Advisor - Project Documentation

## Project Overview
Gift Advisor is an AI-powered gift recommendation platform that helps users find perfect gifts for their loved ones. The application combines artificial intelligence with product search capabilities to provide personalized gift suggestions based on user input.

## Tech Stack
- **Frontend**: Next.js 13 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **AI**: OpenAI GPT-4
- **Product Search**: Amazon Product Advertising API (with plans for more retailers)

## Current Features
1. **AI Chat Interface**
   - Real-time conversation with AI assistant
   - Context-aware gift suggestions
   - Conversation history
   - Responsive design

2. **Theme System**
   - Light/Dark mode toggle
   - Custom color schemes
   - Consistent UI components

3. **Authentication**
   - Email/Password login
   - OAuth providers (Google, GitHub)
   - Protected routes
   - Session management

4. **Database Structure**
   - Gift lists management
   - Saved gifts tracking
   - Chat history storage
   - Row Level Security (RLS)

## Project Structure
```
gift-advisor/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Auth-related pages
│   ├── chat/              # Chat interface
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── chat/             # Chat-related components
│   └── ui/               # UI components
├── lib/                   # Utility functions
│   ├── amazon/           # Amazon API integration
│   ├── auth.ts           # Auth utilities
│   ├── openai.ts         # OpenAI integration
│   └── product-search.ts # Product search service
└── types/                # TypeScript types
```

## Database Schema

### gift_lists
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to auth.users)
- `name`: VARCHAR(255)
- `created_at`: TIMESTAMP

### saved_gifts
- `id`: UUID (Primary Key)
- `list_id`: UUID (Foreign Key to gift_lists)
- `name`: VARCHAR(255)
- `description`: TEXT
- `price`: DECIMAL(10,2)
- `url`: TEXT
- `image_url`: TEXT
- `reason`: TEXT
- `created_at`: TIMESTAMP

### chat_history
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to auth.users)
- `messages`: JSONB
- `created_at`: TIMESTAMP

## Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
AMAZON_MARKETPLACE=
AMAZON_PARTNER_TAG=
AMAZON_ACCESS_KEY=
AMAZON_SECRET_KEY=
```

## Deployment Steps
1. Set up Supabase project
2. Configure environment variables
3. Deploy to hosting platform (e.g., Netlify)
4. Set up domain and SSL
5. Configure retailer API access

## Roadmap

### Phase 1: Core Features Enhancement
- [ ] Implement gift list management
- [ ] Add gift comparison feature
- [ ] Enhance AI conversation capabilities
- [ ] Implement product search caching

### Phase 2: Retailer Integration
- [ ] Amazon Product Advertising API integration
- [ ] Walmart API integration
- [ ] Target API integration
- [ ] Web scraping for other retailers

### Phase 3: User Experience
- [ ] Gift list sharing
- [ ] Price tracking
- [ ] Deal alerts
- [ ] Gift occasion reminders

### Phase 4: Analytics & Optimization
- [ ] User behavior tracking
- [ ] Performance monitoring
- [ ] A/B testing
- [ ] SEO optimization

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow Next.js best practices
- Implement proper error handling
- Write meaningful comments
- Use consistent naming conventions

### Component Structure
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop typing
- Handle loading and error states

### State Management
- Use React hooks effectively
- Implement proper data fetching
- Handle side effects appropriately
- Maintain clean component lifecycle

### Testing
- Write unit tests for utilities
- Implement integration tests
- Test UI components
- Ensure proper error handling

## Security Considerations
- Implement proper authentication
- Use Row Level Security
- Sanitize user input
- Handle sensitive data properly
- Regular security audits

## Performance Optimization
- Implement caching strategies
- Optimize images
- Use proper loading states
- Minimize bundle size
- Implement code splitting

## Contributing
1. Follow code style guidelines
2. Write meaningful commit messages
3. Test thoroughly
4. Document changes
5. Create detailed pull requests

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)