# Dashboard Documentation - The Grand Editorial

## Overview

هذا جزء من نظام **لوحة التحكم الإدارية** لموقع الأخبار "The Grand Editorial". تم تصميمه ليتوافق تماماً مع تصميم الموقع الرئيسي ويوفر إمكانيات إدارة شاملة.

The Dashboard is a comprehensive administrative panel for managing all aspects of your news website, including articles, comments, categories, users, and analytics.

## Features

### 📊 Dashboard Overview
- **Statistics Cards**: عرض الإحصائيات الرئيسية (إجمالي المقالات، التعليقات، المستخدمون، المشاهدات)
- **Trends**: تتبع النسب المئوية للتغيير
- **Recent Activity**: قائمة بأحدث الأنشطة على الموقع
- **Category Performance**: أداء الفئات المختلفة

### 📝 Articles Management
- Create, Read, Update, Delete (CRUD) articles
- Search and filter articles by status
- Article status: Draft, Published, Scheduled
- View metrics: views, comments
- Bulk actions support

### 💬 Comments Management
- Moderate user comments
- Filter comments by status: Approved, Pending, Spam
- Approve or reject comments
- Delete spam comments
- View comment thread information

### 🏷️ Categories Management
- Create and manage article categories
- Edit category names and slugs
- View article count per category
- Delete old categories
- Category performance tracking

### 📈 Analytics Dashboard
- View analytics for different time periods (7 days, 30 days, 3 months, 1 year)
- Key metrics:
  - Page views
  - Unique visitors
  - Average session duration
  - Bounce rate
- Performance by category
- Top performing articles
- Charts and visualizations (ready for integration with charting libraries)

### 👥 Users Management
- View all registered users
- Filter users by status: Active, Inactive
- User information: name, email, country, join date, articles count
- View user profile
- Message users
- Deactivate or delete users

## File Structure

```
app/
└── dashboard/
    ├── layout.tsx                 # Main dashboard layout
    ├── page.tsx                   # Dashboard overview
    ├── articles/
    │   ├── page.tsx              # Articles list
    │   └── new/
    │       └── page.tsx          # Create new article
    ├── comments/
    │   └── page.tsx              # Comments management
    ├── categories/
    │   └── page.tsx              # Categories management
    ├── analytics/
    │   └── page.tsx              # Analytics dashboard
    └── users/
        └── page.tsx              # Users management

component/
└── dashboard/
    ├── Sidebar.tsx               # Navigation sidebar
    ├── StatCard.tsx              # Statistics card component
    └── RecentActivity.tsx        # Recent activity component

services/
└── dashboardService.ts           # API service calls
```

## Design System

### Color Palette
- **Primary**: `#73000c` (Deep Red) - Main actions
- **Secondary**: `#fe9567` (Orange) - Accents
- **Dark**: `#1b1c1b` (Dark Gray) - Text
- **Light**: `#fdfcfb` (Cream) - Background
- **Neutral**: `#e0bfbc` (Beige) - Borders

### Component Styling
All components use:
- **Tailwind CSS** for utility-first styling
- **Smooth Transitions**: 300ms duration for hover effects
- **Rounded Borders**: `rounded-lg` for inputs, `rounded-xl` for cards
- **Responsive Design**: Mobile-first approach with breakpoints

### Sidebar Navigation
- Collapsible sidebar with emoji icons
- Active state highlighting
- Logout button
- Smooth transitions between states

## API Integration

The dashboard uses the following service layer for API calls:

```typescript
// services/dashboardService.ts

// Article API
articleService.getArticles()
articleService.getArticle(id)
articleService.createArticle(data)
articleService.updateArticle(id, data)
articleService.deleteArticle(id)

// Comments API
commentsService.getComments()
commentsService.approveComment(id)
commentsService.deleteComment(id)

// Categories API
categoriesService.getCategories()
categoriesService.createCategory(data)
categoriesService.updateCategory(id, data)
categoriesService.deleteCategory(id)

// Analytics API
analyticsService.getDashboardStats()
analyticsService.getViewsAnalytics(period)
analyticsService.getTopArticles(limit)

// Users API
usersService.getUsers()
usersService.getUser(id)
usersService.deactivateUser(id)
usersService.deleteUser(id)
```

## Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=your_api_url
NEXT_PUBLIC_API_TOKEN=your_api_token
```

## Getting Started

1. **Navigate to Dashboard**: `/dashboard`
2. **Create Article**: Click "New Article" button
3. **Manage Content**: Use the sidebar navigation
4. **Monitor Analytics**: Check analytics dashboard for performance

## Features to Implement

- [ ] Real-time data fetching from API
- [ ] Email notifications for new comments
- [ ] Advanced filtering and search
- [ ] Bulk operations (bulk publish, delete)
- [ ] User role management (Editor, Author, Contributor)
- [ ] Scheduled article publishing
- [ ] Content calendar view
- [ ] Export statistics (CSV, PDF)
- [ ] Dark mode toggle
- [ ] Multi-language support

## Component Usage

### StatCard Component
```tsx
<StatCard
  icon="📰"
  label="Total Articles"
  value="2,847"
  trend={{ value: 12, isPositive: true }}
  color="red"
/>
```

### RecentActivity Component
```tsx
<RecentActivity activities={activities} />
```

## Best Practices

1. **Always use the dashboard service layer** for API calls
2. **Maintain consistent styling** with the design system
3. **Use responsive grid layouts** for better mobile experience
4. **Add loading states** for async operations
5. **Implement error handling** for API failures
6. **Use proper TypeScript types** for data structures

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The dashboard is optimized for:
- Fast load times with server-side rendering
- Efficient component rendering with React 19
- CSS minification with Tailwind CSS
- Image optimization with Next.js Image component

## Security

- API token-based authentication
- CORS headers validation
- Input validation on forms
- XSS prevention with React escaping
- CSRF token support (can be added)

## Support & Maintenance

For issues or feature requests:
1. Create an issue in the project repository
2. Contact the development team
3. Check the documentation for solutions

---

**Last Updated**: January 2024
**Version**: 1.0.0
**Author**: The Grand Editorial Team
