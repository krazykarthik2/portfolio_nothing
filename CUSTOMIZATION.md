# Customization Guide

This portfolio website is built as a template that you can easily customize with your own information. Here's how to personalize each section:

## 1. Hero Section

**File:** `components/Hero.tsx`

Update the following:
- Line 11: Change "Karthik" to your name
- Line 14: Update the tagline/description to describe yourself

## 2. Experience Section

**File:** `components/Experience.tsx`

Update the `experiences` array (starting at line 6) with your own work history:
```typescript
{
  title: "Your Job Title",
  company: "Company Name",
  period: "Start Date - End Date",
  description: "Brief description of what you did"
}
```

## 3. Skills Section

**File:** `components/Skills.tsx`

Update the `skills` array (starting at line 5) with your technologies:
```typescript
const skills = [
  "Your Skill 1", "Your Skill 2", ...
];
```

## 4. Projects Section

**File:** `components/Projects.tsx`

Update the `projects` array (starting at line 5) with your projects:
```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["Tech1", "Tech2"],
  link: "https://your-project-link.com"
}
```

## 5. Contact Section

**File:** `components/Contact.tsx`

Update:
- Line 16: Change the email address
- Line 20: Update your GitHub link
- Line 26: Update your LinkedIn link

## 6. Metadata

**File:** `app/layout.tsx`

Update the metadata (lines 5-8):
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your portfolio description",
};
```

## Color Customization

The portfolio uses a black and white theme. To customize colors:

**File:** `app/globals.css`

Modify the CSS variables:
- `--background`: Main background color
- `--foreground`: Main text color

## Deploying

The easiest way to deploy is using Vercel:
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Click deploy!

You can also deploy to:
- Netlify
- AWS Amplify
- Any static hosting service

Just run `npm run build` and deploy the `.next` folder.
