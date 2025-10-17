# Quick Setup Guide

Follow these steps to get your new portfolio up and running:

## 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- And more...

## 2. Copy Your Images

Your images are currently in the old `images/` folder. The Next.js app expects them in the `public/images/` folder.

**Option A: Copy the entire folder**
```bash
# On Windows PowerShell
Copy-Item -Path "images" -Destination "public" -Recurse

# On Mac/Linux
cp -r images public/
```

**Option B: Create symbolic link (development only)**
```bash
# On Windows (run as Administrator)
mklink /D "public\images" "images"

# On Mac/Linux
ln -s ../images public/images
```

## 3. Update Image References

The code already references images correctly as `/images/...` which will work once you copy/link the folder to `public/`.

Make sure you have these key images:
- `public/images/new-profile.png` - Your profile photo
- `public/images/p*.png` - Project screenshots
- `public/images/KN frontend developer(CV).pdf` - Your resume

## 4. Configure Contact Form

The contact form uses Formspree. It's already configured with your existing form ID `xaneppnd`.

If you want to change it:
1. Go to [formspree.io](https://formspree.io)
2. Sign in and get your form ID
3. Update in `components/Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## 5. Test Project Images

Make sure all your project images exist:
- boatingx.png (currently shows as deleted in git)
- p11.png
- p9.png
- p10.png
- p8.png
- p4.png
- p3.png
- p2.png

If any are missing, update the image paths in `components/Projects.tsx`.

## 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 7. Customize Content

### Update Personal Information
- `components/Hero.tsx` - Your name and intro
- `components/About.tsx` - Your story
- `components/Skills.tsx` - Your skills
- `components/Projects.tsx` - Your projects
- `components/Contact.tsx` - Contact info
- `app/layout.tsx` - Meta tags for SEO

### Update Colors (Optional)
Edit `tailwind.config.ts` to change the blue sky theme to your preferred colors.

### Update Social Links
In `components/Contact.tsx`, update:
- GitHub URL
- LinkedIn URL
- Vercel URL
- Phone number
- WhatsApp number
- Email

## 8. Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## 9. Deploy

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

The site will be live in minutes!

## Troubleshooting

### Images not showing
- Make sure images are in `public/images/` folder
- Check that image names match exactly (case-sensitive)
- Clear Next.js cache: `rm -rf .next` and restart dev server

### TypeScript errors
- Make sure all dependencies are installed: `npm install`
- Check `tsconfig.json` is present
- Restart your editor/IDE

### Styling issues
- Verify `tailwind.config.ts` is correct
- Check `app/globals.css` imports Tailwind
- Clear cache and restart dev server

### Dark mode not working
- Check browser console for errors
- Clear localStorage in browser DevTools
- Make sure JavaScript is enabled

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review component files for inline comments
- Open an issue on GitHub if you find bugs

---

🎉 You're all set! Your modern portfolio is ready to showcase your work.

